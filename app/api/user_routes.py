import os
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User,db
from app.forms import ProfileForm
from app.forms import EmptyForm



user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    # print("**************** GET ALL USERS ****************")
    # print(users)
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    # print("**************** GET 1 USER ****************")
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)

    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_user(id):
    # print('*********************EDIT User*******************************')
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        data = form.data
        # print(data, 'helloo from backend')

        user= User.query.get(id)
        for key, value in data.items():
            setattr(user, key, value)
        # print('*********************UPDATED User*******************************')
        db.session.commit()

        return user.to_dict()


@user_routes.route('/follow/<username>', methods=['POST'])
@login_required
def follow(username):
    user = User.query.filter_by(username=username).first()

    current_user.follow(user)
    db.session.commit()

    return current_user.to_dict()




@user_routes.route('/unfollow/<username>', methods=['POST'])
@login_required
def unfollow(username):
    user = User.query.filter_by(username=username).first()


    current_user.followed.remove(user)
    # print(user.followers,'hellloo')
    db.session.commit()

    return current_user.to_dict()



@user_routes.route('/<int:id>/followers', methods=['GET'])
# @login_required
def getFollowers(id):
    curUser = User.query.get(id)
    users = curUser.getAllFollowers()
    # print(users, 'FOLLWERSS USERSSS FROMMM BACK ENDD @@@')
    # [print(user.to_dict()) for user in users]
    return { 'followers': [user.to_dict() for user in users]}

@user_routes.route('/<int:id>/followings', methods=['GET'])
# @login_required
def getFollowings(id):
    curUser = User.query.get(id)
    users = curUser.getAllFollowing()
    # print(users, 'FOLLOWINGG USERSSS FROMMM BACK ENDD @@@')

    return { 'followings': [user.to_dict() for user in users]}



# @user_routes.route('/<int:id>', methods=['POST'])
# @login_required
# def unfollow(username):
#     form = EmptyForm()
#     if form.validate_on_submit():
#         user = User.query.filter_by(username=username).first()
#         if user is None:
#             return flash('User {} not found.'.format(username))
#         if user == current_user:
#             return flash('You cannot unfollow yourself!')
#         current_user.unfollow(user)
#         db.session.commit()
#         return flash('You are not following {}.'.format(username))
#     else:
#         return user.to_dict()
