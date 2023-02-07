from .db import db, environment, SCHEMA, add_prefix_for_prod
from .pinning import pinning

class Board(db.Model):
    __tablename__ = 'boards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    imageUrl = db.Column(db.String(255))

    pins = db.relationship("Pin", secondary=pinning, lazy="joined")

    def __repr__(self):
        return f'<BoardId: {self.id}, userId: {self.userId}, title: {self.title},image:{self.imageUrl}>'


    def to_dict(self):
            return {
                'id': self.id,
                'userId': self.userId,
                'title': self.title,
                'imageUrl': self.imageUrl,
                'pins': list(map(lambda p: p.to_dict(), self.pins))
            }
