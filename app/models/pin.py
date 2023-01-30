from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Pin(db.Model):
    __tablename__ = 'pins'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255))
    save = db.Column(db.Boolean)
    url = db.Column(db.String(255))
    imageUrl = db.Column(db.String(255))


def to_dict(self):
    return {
        'id': self.id,
        'userId': self.userId,
        'title': self.title,
        'save': self.save,
        'url': self.url,
        'imageUrl': self.imageUrl,
    }
