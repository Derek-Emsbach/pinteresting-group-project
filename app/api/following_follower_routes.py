from flask import Blueprint, jsonify, render_template, redirect
from flask_login import login_required
from app.models import Following_Follower, db
# from app import dbfuncs

following_follower_routes = Blueprint('followings_followers', __name__)


@following_follower_routes.route('/', methods=['GET'])
# @login_required
def get_all_followings_followers():
    print('********GET ALL FOLLOWINGS_FOLLOWERS********')
    followings_followers = Following_Follower.query.all()
    return {'followings_followers': [following_follower.to_dict() for following_follower in followings_followers]}


@following_follower_routes.route('/', methods=['POST'])
@login_required
def create_following_follower(id):
    pass


@following_follower_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_following_follower(id):
    following_follower = following_follower.query.get(id)
    print('************GET 1 FOLLOWING************')
    return following_follower.to_dict()


@following_follower_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_following_follower(id):
    pass


@following_follower_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_following_follower(id):
    following_follower = following_follower.query.get(id)
    db.session.delete(following_follower)
    db.session.commit()
    return "Successfully deleted following_follower"
