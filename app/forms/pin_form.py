from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField
from wtforms.validators import DataRequired, Email, ValidationError

class PinForm(FlaskForm):
    title = StringField('Title',validators=[DataRequired()])
    url = StringField('Url',validators=[DataRequired()])
    imageUrl = StringField('Image Url',validators=[DataRequired()])


