from flask import Blueprint, jsonify, render_template, redirect
from flask_login import login_required
from app.models import Pin
# from app import dbfuncs

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/')
@login_required
def get_all_pins():

    pins = Pin.query.all()
    print('********GET ALL PINS********')

    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/<int:id>')
@login_required
def get_pin(id):
    print('************GET 1 PIN********************')
    pin = Pin.query.get()
    return pin.to_dict()

@pin_routes.route('/', methods=['POST'])
@login_required
def create_pin(id):
    pass


@pin_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_pin(id):
    pass


@pin_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_pin(id):
    pass
