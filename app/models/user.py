from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



followers = db.Table(
    'followers',
    db.Model.metadata,
    db.Column('follower_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')),primary_key=True),
    db.Column('followed_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')),primary_key=True),
    schema=SCHEMA
)



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(20), nullable=False)
    lastName = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    about= db.Column(db.String(500),nullable = True, default='')
    image = db.Column(db.String(1500), nullable = True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    following = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id), lazy='dynamic')

    followers = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.followed_id == id),
        secondaryjoin=(followers.c.follower_id == id), lazy='dynamic')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


    def follow(self, user):
        self.following.append(user)

    def unfollow(self, user):
        for other_user in self.following:
            if other_user.id == user.id:
                self.following.remove(user)

    def __repr__(self):
        return f'<Userid: {self.id}, firstName:{self.firstName}, lastName:{self.lastName}, about:{self.about}, image:{self.image}, username: {self.username}, password: {self.password}>'

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'about': self.about,
            'image':self.image,
            'username': self.username,
            'email': self.email,
        }

    def to_dict_with_counts(self):
        return self.to_dict() | {
            'followingCount': self.following.count(),
            'followersCount': self.followers.count(),
        }

    def to_dict_with_related(self):
        return self.to_dict() | {
            'following': list(map(lambda u: u.to_dict_with_counts(), self.following)),
            'followers': list(map(lambda u: u.to_dict_with_counts(), self.followers)),
        }
