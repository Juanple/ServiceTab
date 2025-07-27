from flask import Flask, jsonify, request, Blueprint
from flask_cors import CORS

from routes.waiter import waiter
from routes.table import table
from routes.product import product
from services.header import header
from services.orderSummary import orderSummary

app = Flask(__name__)
CORS(app)

# Definir los blueprints
app.register_blueprint(waiter)
app.register_blueprint(table)
app.register_blueprint(product)
app.register_blueprint(header)
app.register_blueprint(orderSummary)

if __name__ == '__main__':
    app.run(debug=True)