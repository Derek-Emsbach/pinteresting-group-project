import os
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Pin, Board
from app.forms import ProfileForm
from app.forms import EmptyForm



user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    # print("**************** GET ALL USERS ****************")
    # print(users)
    return jsonify([user.to_dict_with_related() for user in users])


@user_routes.route('/<int:id>')
@login_required
def user(id):
    # print("**************** GET 1 USER ****************")
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)

    return user.to_dict_with_related()

@user_routes.route('/<int:id>/pins')
# @login_required
def user_pins(id):
    pins = Pin.query.filter_by(userId=id)
    return jsonify([pin.to_dict() for pin in pins])

@user_routes.route('/<int:id>/boards')
# @login_required
def user_boards(id):
    boards = Board.query.filter_by(userId=id)
    return jsonify([board.to_dict() for board in boards])

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

        return user.to_dict_with_related()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@user_routes.route('/follow/<int:id>', methods=['POST'])
@login_required
def follow(id):
    other_user = User.query.filter_by(id=id).first()

    current_user.follow(other_user)
    db.session.commit()

    return current_user.to_dict_with_related()


@user_routes.route('/unfollow/<int:id>', methods=['POST'])
@login_required
def unfollow(id):
    other_user = User.query.filter_by(id=id).first()

    current_user.unfollow(other_user)
    db.session.commit()

    return current_user.to_dict_with_related()
