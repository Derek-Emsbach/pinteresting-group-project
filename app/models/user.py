from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



followers = db.Table(
    'followers',
    db.Model.metadata,
    db.Column('follower_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'))),
    db.Column('followed_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
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
    image = db.Column(db.String(20), nullable = True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)


    followed = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)


    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(
            followers.c.followed_id == user.id).count() > 0

    def getAllFollowers(self):
        getFollowers = User.query.join(followers,(followers.c.follower_id == User.id)).filter(followers.c.followed_id == self.id)
        return getFollowers

    def getAllFollowing(self):
        getFollowings = User.query.join(followers,(followers.c.followed_id == User.id)).filter(followers.c.follower_id == self.id)
        return getFollowings



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
