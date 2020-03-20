from app import db
from flask import request, jsonify
from ..models.property import Property, property_share_schema, properties_share_schema


def feed_sale():
    properties = properties_by_type('sale')
    if properties:
        result = properties_share_schema.dump(properties)
        return jsonify({'message': 'successfully fetched', 'data': result.data}), 201

    return jsonify({'message': "Error to get Properties", 'data': {}}), 404


def feed_rent():
    properties = properties_by_type('rent')
    if properties:
        result = properties_share_schema.dump(properties)
        return jsonify({'message': 'successfully fetched', 'data': result.data}), 201

    return jsonify({'message': "Error to get Properties", 'data': {}}), 404


def feed_spotlight():
    properties = properties_by_spotlight()
    if properties:
        result = properties_share_schema.dump(properties)
        return jsonify({'message': 'successfully fetched', 'data': result.data}), 201

    return jsonify({'message': "Error to get Properties", 'data': {}}), 404


def get_property(id):
    property = Property.query.get(id)
    if property:
        result = property_share_schema.dump(property)
        return jsonify({'message': 'successfully fetched', 'data': result.data}), 201

    return jsonify({'message': "Error to get Properties", 'data': {}}), 404


def add_property():
    name = request.json['name']
    description = request.json['description']
    date = request.json['date']
    sq = request.json['sq']
    bedrooms = request.json['bedrooms']
    bathrooms = request.json['bathrooms']
    price = request.json['price']
    type = request.json['type']
    features = request.json['features']
    lot = request.json['lot']
    parking = request.json['parking']
    room = request.json['room']
    roof = request.json['roof']
    view = request.json['view']
    exterior = request.json['exterior']

    property = Property(name, description, date, sq, bedrooms, bathrooms, price, type, features, lot, parking, room, roof,
                        view, exterior,)

    try:
        db.session.add(property)
        db.session.commit()
        result = property_share_schema.dump(property)
        return jsonify({'message': 'successfully registered', 'data': result.data}), 201
    except:
        return jsonify({'message': 'unable to create', 'data': {}}), 500


def properties_by_type(type):
    try:
        return Property.query.filter(Property.type == type)
    except:
        return None


def properties_by_spotlight():
    try:
        return Property.query.filter(Property.spotlight)
    except:
        return None
