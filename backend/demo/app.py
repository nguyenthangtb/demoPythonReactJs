from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

import os

# Init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# User Class/Model


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200))
    name = db.Column(db.String(200))
    description = db.Column(db.String(200))
    email = db.Column(db.String(200))
    password = db.Column(db.String(200))
    passcode = db.Column(db.String(200))
    devices = db.Column(db.Integer)
    organization = db.Column(db.Integer)

    def __init__(self, username, name, description, email, password, passcode, devices, organization):
        self.username = username
        self.name = name
        self.description = description
        self.email = email
        self.password = password
        self.passcode = passcode
        self.devices = devices
        self.organization = organization

# User Schema


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'name', 'description', 'email',
                  'password', 'passcode', 'devices', 'organization')


# Init schema
user_schema = UserSchema()
users_schema = UserSchema(many=True)


# create a user
@app.route('/user', methods=['POST'])
def userAdd():
    username = request.json['username']
    name = request.json['name']
    description = request.json['description']
    email = request.json['email']
    password = request.json['password']
    passcode = request.json['passcode']
    devices = request.json['devices']
    organization = request.json['organization']

    new_user = User(username, name, description, email, password, passcode, devices, organization)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"mesg": "Insert success"})

# Get all users
@app.route('/user', methods=['GET'])
def users():
    users = User.query.all()
    result = users_schema.dump(users)
    return jsonify(result)

# Get simple User
@app.route('/user/<id>', methods=['GET'])
def userDetail(id):
    data = User.query.get(id)
    return user_schema.jsonify(data)

# Update User
@app.route("/user/<id>", methods=["PUT"])
def userUpdate(id):
    data = User.query.get(id)
    username = request.json['username']
    name = request.json['name']
    description = request.json['description']
    email = request.json['email']
    password = request.json['password']
    passcode = request.json['passcode']
    devices = request.json['devices']
    organization =  request.json['organization']


    data.username = username
    data.name = name
    data.description = description
    data.email = email
    data.password = password
    data.passcode = passcode
    data.devices = devices
    data.organization = organization

    db.session.commit()
    return user_schema.jsonify(data)

# Delete User
@app.route("/user/<id>", methods=["DELETE"])
def userDelete(id):
    data = User.query.get(id)
    # try:
    #     pass
    # except expression as identifier:
    #     pass
    db.session.delete(data)
    db.session.commit()
    return jsonify({
        "status": 200,
        "mesg": "Deleted success!"
    })


#Check username is unique

# @app.route("/user/<username>", methods=["GET"])
# def checkUserNameUnique(input):
#     data = User.query.get(input)
#     print(input)


#test status

@app.route("/user/status", methods=["GET"])
def checkUserNameUnique():
     return jsonify(
        {
            "status":200,
            "mesg": "success"
        }
    )



# run server
if __name__ == '__main__':
    app.run(debug=True)
