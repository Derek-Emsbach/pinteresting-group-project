from flask import Blueprint, jsonify,render_template,redirect
from flask_login import login_required
from app.models import Board
# from app import dbfuncs

board_routes = Blueprint('boards', __name__)

@board_routes.route('/')
@login_required
def boards():
    boards = Board.query.all()
    print("**************** GET ALL BOARDS ****************")

    print(boards)
    return {'boards': [board.to_dict() for board in boards]}

# @board_routes.route('/<int:id>')
# @login_required
# def board(id):
#     print("************GET 1 BOARD********************")
#     board = Board.query.get(id)
#     return board.to_dict()

# @board_routes.route('/boards', methods=['POST'])
# @login_required
# def create_board(id):
#     pass



# @board_routes.route('/boards/<int:id>', methods=['PUT'])
# @login_required
# def edit_board(id):
#     pass

# @board_routes.route('/boards/<int:id>', methods=['DELETE'])
# @login_required
# def delete_board(id):
#     pass
