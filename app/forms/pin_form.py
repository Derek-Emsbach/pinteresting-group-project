from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField
from wtforms.validators import DataRequired, Email, ValidationError, URL

class PinForm(FlaskForm):
    title = StringField('Title',validators=[DataRequired()])
    url = StringField('Url',validators=[DataRequired(), URL( message='This is not a valid link, make sure you enter the entire URL')])
    imageUrl = StringField('Image Url',validators=[DataRequired(), URL( message='This is not a valid image link, make sure you enter the entire image URL')])


