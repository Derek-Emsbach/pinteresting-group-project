from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

class BoardForm(FlaskForm):
    title = StringField('Title',validators=[DataRequired()])
    imageUrl = StringField('Image Url',validators=[DataRequired()])
