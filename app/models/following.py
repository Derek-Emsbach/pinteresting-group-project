from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash

class Following(db.Model):
    __tablename__ = 'followings'

    id = db.Column(db.Integer, primary_key=True)
    followedUserId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    followerUserId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


def to_dict(self):
    return {
        'id': self.id,
        'followedUserId': self.followedUserId,
        'followerUserId': self.followerUserId,
    }
