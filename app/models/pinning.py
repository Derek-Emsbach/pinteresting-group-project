from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


# It is recommended to use an "actual table" instead of models for many-to-many relationships
# see this doc https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#many-to-many-relationships
pinning = db.Table('pinnings',
    db.Column('pinId', db.Integer, db.ForeignKey('pins.id'), primary_key=True),
    db.Column('boardId', db.Integer, db.ForeignKey('boards.id'), primary_key=True),
)
