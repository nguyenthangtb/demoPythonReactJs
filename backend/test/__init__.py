from flask import Flask
from flask_sqlalchemy import SQLAlchemy
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
 
from backend.test.product.views import product


app.register_blueprint(product)
 
db.create_all()