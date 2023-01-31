from flask import Blueprint, jsonify, render_template, redirect, request
from flask_login import login_required, current_user
from app.models import Pin, db
from app.forms import PinForm

# from app import dbfuncs

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/', methods=['GET'])
# @login_required
def get_all_pins():
    pins = Pin.query.all()
    print('********GET ALL PINS********')
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/<int:id>')
# @login_required
def get_pin(id):
    print('************GET 1 PIN********************')
    pin = Pin.query.get()
    return pin.to_dict()


@pin_routes.route('/', methods=['POST'])
@login_required
def create_pin():
    print("************CREATE NEW PIN********************")
    form = PinForm()
    #!POSTMAN Testing
    # data = request.json
    # print(data)
    # new_pin = Pin(userId=current_user.get_id(),title=data['title'], url=data['url'], imageUrl=data['imageUrl'])

    if form.validate_on_submit():
        data = form.data
        new_pin = Pin(userId=current_user.get_id(),
                      title=data['title'], url=data['url'], imageUrl=data['imageurl'])
        form.populate_obj(new_pin)
    print('*********************CREATED*******************************')
    print(new_pin)
    db.session.add(new_pin)
    db.session.commit()
    return redirect('/')


@pin_routes.route('/<int:id>', methods=['PUT'])
# @login_required
def edit_pin(id):
    # data = request.json
    print('*********************EDIT PIN*******************************')
    # print(data)

    # pin = Pin.query.get(id)
    # print(pin)
    # for key, value in data.items():
    #     setattr(pin, key, value)
    # db.session.commit()
    # print('*********************UPDATED PIN*******************************')
    form = PinForm()
    if form.validate_on_submit():
        data = form.data
        pin = Pin.query.get(id)
        print(pin)
        for key, value in data.items():
            setattr(pin, key, value)
        print('*********************UPDATED PIN*******************************')
        db.session.commit()
        return pin.to_dict()

@pin_routes.route('/<int:id>', methods=['DELETE'])
# @login_required
def delete_pin(id):
    pin = Pin.query.get(id)
    db.session.delete(pin)
    db.session.commit()
    return "Successfully Deleted Pin"
