from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, URL
from flask_wtf.file import FileField, FileAllowed


class ProfileForm(FlaskForm):
    image = StringField('Update Profile Picture', validators=[DataRequired(), URL( message='This is not a valid image link, make sure you enter the entire image URL')])
    firstName = StringField('First name', validators=[DataRequired()])
    lastName = StringField('Last name', validators=[DataRequired()])
    about = StringField('About')
    username = StringField('username')
