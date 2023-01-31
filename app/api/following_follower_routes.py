from flask import Blueprint, jsonify,render_template,redirect
from flask_login import login_required
from app.models import Following_Follower
# from app import dbfuncs

following_follower_routes = Blueprint('followings_followers', __name__)

@following_follower_routes.route('/followings_followers')
@login_required
def get_all_followings_followers():

    followings_followers = Following_Follower.query.all()
    print('********GET ALL FOLLOWINGS_FOLLOWERS********')
    return {'followings_followers':[following_follower.to_dict() for following_follower in followings_followers]} ##usally this is render_template("page.html",forms=forms)

@following_follower_routes.route('/followings_followers/', methods=['POST'])
@login_required
def create_following_follower(id):
    pass

@following_follower_routes.route('/followings_followers/<int:id>', methods=['GET'])
@login_required
def get_following_follower(id):
    pass

@following_follower_routes.route('/followings_followers/<int:id>', methods=['PUT'])
@login_required
def edit_following_follower(id):
    pass

@following_follower_routes.route('/followings_followers/<int:id>', methods=['DELETE'])
@login_required
def delete_following_follower(id):
    pass
