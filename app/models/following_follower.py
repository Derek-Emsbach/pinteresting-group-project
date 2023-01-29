from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Following_Follower(db.Model):
    __tablename__ = 'followings_followers'

    id = db.Column(db.Integer, primary_key=True)
    followedUserId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    followerUserId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


def to_dict(self):
    return {
        'id': self.id,
        'followedUserId': self.followedUserId,
        'followerUserId': self.followerUserId,
    }
