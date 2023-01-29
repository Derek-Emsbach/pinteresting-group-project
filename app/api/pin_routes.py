from flask import Blueprint, jsonify,render_template,redirect
from flask_login import login_required
from app.models import Pin
# from app import dbfuncs

pin_routes = Blueprint('pin', __name__)

@pin_routes.route('/pins')
@login_required
def get_all_pins():

    pins = Pin.query.all()
    print('********GET ALL PINS********')
    return {'pins':[pin.to_dict() for pin in pins]} ##usally this is render_template("page.html",forms=forms)

@pin_routes.route('/pins/<int:id>', methods=['POST'])
@login_required
def create_pin(id):
    pass

@pin_routes.route('/pins/<int:id>', methods=['GET'])
@login_required
def get_pin(id):
    pass

@pin_routes.route('/pins/<int:id>', methods=['PUT'])
@login_required
def edit_pin(id):
    pass

@pin_routes.route('/pins/<int:id>', methods=['DELETE'])
@login_required
def delete_pin(id):
    pass
