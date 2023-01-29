from flask import Blueprint, jsonify,render_template,redirect
from flask_login import login_required
from app.models import Board
from app import dbfuncs

board_routes = Blueprint('boards', __name__)

@board_routes.route('/boards')
@login_required
def get_all_boards():
    boards = Board.query.all()
    return boards

@board_routes.route('/boards', methods=['POST'])
@login_required
def create_board(id):
    pass

@board_routes.route('/boards/<int:id>', methods=['GET'])
@login_required
def get_board(id):
    pass

@board_routes.route('/boards/<int:id>', methods=['PUT'])
@login_required
def edit_board(id):
    pass

@board_routes.route('/boards/<int:id>', methods=['DELETE'])
@login_required
def delete_board(id):
    pass
