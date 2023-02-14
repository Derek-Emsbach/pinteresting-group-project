from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from flask_wtf.file import FileField, FileAllowed
from sqlalchemy import func

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(func.lower(User.email) == func.lower(email)).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(func.lower(User.username) == func.lower(username)).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    firstName = StringField('First name', validators=[DataRequired()])
    lastName = StringField('Last name', validators=[DataRequired()])
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
