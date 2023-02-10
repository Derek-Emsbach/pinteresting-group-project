from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_wtf.file import FileField, FileAllowed


class ProfileForm(FlaskForm):
    image = StringField('Update Profile Picture', validators=[DataRequired()])
    firstName = StringField('First name', validators=[DataRequired()])
    lastName = StringField('Last name', validators=[DataRequired()])
    about = StringField('About')
    username = StringField('username')
