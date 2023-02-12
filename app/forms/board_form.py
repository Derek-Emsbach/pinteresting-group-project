from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, URL

class BoardForm(FlaskForm):
    title = StringField('Title',validators=[DataRequired()])
    imageUrl = StringField('Image Url',validators=[DataRequired(), URL( message='This is not a valid image link, make sure you enter the entire image URL')])
