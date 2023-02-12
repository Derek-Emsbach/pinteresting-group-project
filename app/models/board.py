from .db import db, environment, SCHEMA, add_prefix_for_prod

# From the docs about setting up many-to-many relationships: "`relationship.secondary` may also be passed as a callable function which is evaluated at mapper initialization time."
#   (Link to the docs https://docs.sqlalchemy.org/en/14/orm/relationship_api.html#sqlalchemy.orm.relationship.params.secondary )
#
# tl;dr hopefully prevent Python from complaining about "can't find table `boards` when trying to create ForeignKeyConstraint"
pinnings = db.Table (
    'pinnings',
    db.Model.metadata,
    db.Column('pinId', db.Integer, db.ForeignKey(add_prefix_for_prod('pins.id')), primary_key=True),
    db.Column('boardId', db.Integer, db.ForeignKey(add_prefix_for_prod('boards.id')), primary_key=True),
    schema=SCHEMA
    )


class Board(db.Model):
    __tablename__ = 'boards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    imageUrl = db.Column(db.String(1500))

    pins = db.relationship("Pin", secondary=pinnings, lazy="joined")

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
