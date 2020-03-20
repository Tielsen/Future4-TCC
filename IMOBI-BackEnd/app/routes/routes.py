from app import app
from flask import jsonify
from ..views import users, authenticate, properties


@app.route('/login', methods=['POST'])
def login():
    return authenticate.auth


@app.route('/register', methods=['POST'])
def register():
    return users.post_user()


@app.route('/get_User/<id>', methods=['GET'])
@authenticate.token_required
def get_user(id):
    return users.get_user(id)


@app.route('/edit_User/<id>', methods=['PUT'])
@authenticate.token_required
def edit_user(id):
    return users.update_user(id)


@app.route('/delete_User/<id>', methods=['DELETE'])
@authenticate.token_required
def delete_user(id):
    return users.delete_user(id)


@app.route('/add_property', methods=['POST'])
def add_property():
    return properties.add_property()


@app.route('/feed_Sale', methods=['GET'])
def feed_sale():
    return properties.feed_sale()


@app.route('/feed_Rent', methods=['GET'])
def feed_rent():
    return properties.feed_rent()


@app.route('/feed_spotlight', methods=['GET'])
def feed_spotlight():
    return properties.feed_spotlight()


@app.route('/get_Property/<id>', methods=['GET'])
def get_property():
    return properties.get_property()


@app.route('/add_Bookmark', methods=['PUT'])
@authenticate.token_required
def add_bookmark():
    return jsonify({"message": "prov"})


@app.route('/get_Bookmark', methods=['GET'])
@authenticate.token_required
def get_bookmark():
    return jsonify({"message": "prov"})