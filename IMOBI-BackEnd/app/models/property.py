from app import db, ma


class Property(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(128), nullable=False,)
    description = db.Column(db.String(1000), nullable=False)
    date = db.Column(db.Date, nullable=False)
    sq = db.Column(db.Numeric, nullable=False)
    bedrooms = db.Column(db.Numeric, nullable=False)
    bathrooms = db.Column(db.Numeric, nullable=False)
    price = db.Column(db.Numeric, nullable=False, )
    type = db.Column(db.String(128), nullable=False)
    features = db.Column(db.String(128), nullable=False)
    lot = db.Column(db.Numeric, nullable=False)
    parking = db.Column(db.String(128), nullable=False)
    room = db.Column(db.Numeric, nullable=False)
    roof = db.Column(db.String(128), nullable=False)
    view = db.Column(db.String(128), nullable=False)
    exterior = db.Column(db.String(128), nullable=False)
    spotlight = db.Column(db.Boolean, nullable=False)

    def __init__(self, name, description, date, sq, bedrooms, bathrooms, price, type, features, lot, parking, room, roof
                 , view, exterior):
        self.name = name
        self.description = description
        self.date = date
        self.sq = sq
        self.bedrooms = bedrooms
        self.bathrooms = bathrooms
        self.price = price
        self.type = type
        self.features = features
        self.lot = lot
        self.parking = parking
        self.room = room
        self.roof = roof
        self.view = view
        self.exterior = exterior
        self.spotlight = False


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'date', 'sq', 'bedrooms', 'bathrooms', 'price', 'type', 'features', 'lot'
                  , 'parking', 'room', 'roof', 'view', 'exterior', 'spotlight')


property_share_schema = UserSchema()
properties_share_schema = UserSchema(many=True)

