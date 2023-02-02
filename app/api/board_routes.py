from flask import Blueprint, jsonify,render_template,redirect,request
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_login import login_required,current_user
from app.models import Board,db
from app.forms import BoardForm
# from app import dbfuncs

board_routes = Blueprint('boards', __name__)

@board_routes.route('/',methods=['GET'])
# @login_required
def get_all_boards():
    boards = Board.query.all()
    print("**************** GET ALL BOARDS ****************")

    print(boards)
    return {'boards': [board.to_dict() for board in boards]}

@board_routes.route('/<int:id>')
@login_required
def get_board(id):
    print("************GET 1 BOARD********************")
    board = Board.query.get(id)
    return board.to_dict()

@board_routes.route('/', methods=['GET', 'POST'])
@login_required
def create_board():
    print("************CREATE NEW BOARD********************")
    #! POSTMAN testing code.
#     data = request.json
#     print(data)
#     new_board = Board(userId=1,title=data['title'],imageUrl=data['imageUrl'])

    form = BoardForm()
    if form.validate_on_submit():
        data = form.data
        new_board = Board(userId=current_user.get_id(),
                          title=data['title'],
                          imageUrl=data['imageUrl'])
        print('*********************CREATED*******************************')
        form.populate_obj(new_board)
        print(new_board)
        db.session.add(new_board)
        db.session.commit()
        return redirect('/')



@board_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_board(id):
    print('*********************EDIT BOARD*******************************')
    form = BoardForm
    if form.validate_on_submit():
        data = form.data
        board = Board.query.get(id)
        print(board)
        for key, value in data.items():
            setattr(board, key, value)
        print('*********************UPDATED BOARD*******************************')
        db.session.commit()
        return board.to_dict()

@board_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_board(id):
    board = Board.query.get(id)
    db.session.delete(board)
    db.session.commit()
    return "sucessfully deleted Board"
