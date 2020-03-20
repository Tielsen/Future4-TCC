from app import db, ma
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    username = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)

    def __init__(self, email, password, username):
        self.email = email
        self.password = generate_password_hash(password)
        self.username = username

    def verify_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User : {self.email} >"


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'email', 'password', 'username')


user_share_schema = UserSchema()
users_share_schema = UserSchema(many=True)



# class Bookmark(db.Model, User):
#     __tablename__ = "bookmarkUser" + User.id
#
