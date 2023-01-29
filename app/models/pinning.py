from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Pinning(db.Model):
    __tablename__ = 'pinnings'

    id = db.Column(db.Integer, primary_key=True)
    boardId = db.Column(db.Integer, db.ForeignKey('boards.id'), nullable=False)
    pinId = db.Column(db.Integer, db.ForeignKey('pins.id'), nullable=False)


def to_dict(self):
    return {
        'id': self.id,
        'boardId': self.boardId,
        'pinId': self.pinId,

    }
