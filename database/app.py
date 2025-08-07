from flask import Flask
from flask_cors import CORS

from routes.waiter import waiter
from routes.table import table
from routes.product import product
from services.header import header
from services.orderSummary import orderSummary
from services.reset import reset
from services.printTicket import printTicket
from services.printCuenta import printCuenta

app = Flask(__name__)
CORS(app)

# Definir los blueprints
app.register_blueprint(waiter)
app.register_blueprint(table)
app.register_blueprint(product)
app.register_blueprint(header)
app.register_blueprint(orderSummary)
app.register_blueprint(reset)
app.register_blueprint(printTicket)
app.register_blueprint(printCuenta)

if __name__ == '__main__':
    app.run(debug=True)