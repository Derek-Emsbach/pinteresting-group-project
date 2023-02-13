from flask import Blueprint, jsonify,render_template,redirect,request
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_login import login_required,current_user
from app.models import Board,Pin,db
from app.forms import BoardForm
# from app import dbfuncs

board_routes = Blueprint('boards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@board_routes.route('/',methods=['GET'])
# @login_required
def get_all_boards():
    boards = Board.query.all()
    return jsonify([board.to_dict() for board in boards])

@board_routes.route('/<int:id>')
@login_required
def get_board(id):
    # print("************GET 1 BOARD********************")
    board = Board.query.get(id)
    return board.to_dict()

@board_routes.route('/', methods=['GET', 'POST'])
@login_required
def create_board():
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_board = Board(userId=current_user.get_id(),
                          title=data['title'],
                          imageUrl=data['imageUrl'])
        # print('*********************CREATED*******************************')
        form.populate_obj(new_board)
        # print(new_board)
        db.session.add(new_board)
        db.session.commit()
        return new_board.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@board_routes.route('/<int:id>', methods=["PATCH", "PUT"])
@login_required
def edit_board(id):
    # print('*********************EDIT PIN*******************************')
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        board = Board.query.get(id)
        # print(board)
        for key, value in data.items():
            setattr(board, key, value)
        # print('*********************UPDATED PIN*******************************')
        db.session.commit()
        return board.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@board_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_board(id):
    board = Board.query.get(id)
    db.session.delete(board)
    db.session.commit()
    return "sucessfully deleted Board"


@board_routes.route('/<int:board_id>/pin/<int:pin_id>', methods=["POST"])
@login_required
def add_pinning(board_id, pin_id):
    pin = Pin.query.get(pin_id)
    board = Board.query.get(board_id)

    if board.userId != current_user.id:
        return {'errors': ['Unauthorized']}, 403

    board.pins.append(pin)

    db.session.commit()
    return board.to_dict()

@board_routes.route('/<int:board_id>/pin/<int:pin_id>', methods=['DELETE'])
@login_required
def remove_pinning(board_id, pin_id):
    board = Board.query.get(board_id)

    if board.userId != current_user.id:
        return {'errors': ['Unauthorized']}, 403

    for pin in board.pins:
        if pin.id == pin_id:
            board.pins.remove(pin)

    db.session.commit()
    return board.to_dict()
