from app import db
from flask import request, jsonify
from ..models.users import User, user_share_schema, users_share_schema


def get_user(id):
    user = User.query.get(id)
    if user:
        result = user_share_schema.dump(user)
        return jsonify({'message': 'successfully fetched', 'data': result.data}), 201

    return jsonify({'message': "user don't exist", 'data': {}}), 404


def post_user():
    password = request.json['password']
    email = request.json['email']
    username = request.json['username']

    email = user_by_email(email)
    if email:
        return jsonify({'message': 'user already exists', 'data': {}})

    user = User(email, password, username)

    try:
        db.session.add(user)
        db.session.commit()
        result = user_share_schema.dump(user)
        return jsonify({'message': 'successfully registered', 'data': result.data}), 201
    except:
        return jsonify({'message': 'unable to create', 'data': {}}), 500


def update_user(id):
    password = request.json['password']
    new_password = request.json['new_password']
    email = request.json['email']
    username = request.json['username']
    user = User.query.get(id)

    if not user:
        return jsonify({'message': "user don't exist", 'data': {}}), 404

    if user.verify_password(password):
        if user:
            try:
                user.password = new_password
                user.email = email
                user.username = username
                db.session.commit()
                result = user_share_schema.dump(user)
                return jsonify({'message': 'successfully updated', 'data': result.data}), 201
            except:
                return jsonify({'message': 'unable to update', 'data':{}}), 500
    else:
        return jsonify({'message': 'password invalid', 'data': {}}), 400


def delete_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({'message': "user don't exist", 'data': {}}), 404

    if user:
        try:
            db.session.delete(user)
            db.session.commit()
            result = user_share_schema.dump(user)
            return jsonify({'message': 'successfully deleted', 'data': result.data}), 200
        except:
            return jsonify({'message': 'unable to delete', 'data': {}}), 500


def user_by_email(email):
    try:
        return User.query.filter(User.email == email).one()
    except:
        return None
