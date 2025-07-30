from flask import request, jsonify, Blueprint
from connection import getConnection
import session

product = Blueprint('product', __name__)

@product.route('/tables/menu-general/', methods=['POST'])
def saveProductInfo():
    data = request.get_json()
    name = data['name']
    price = data['price']

    connection = getConnection()
    cursor = connection.cursor()

    # Insertar datos en la db
    cursor.execute('INSERT INTO product(name, price, idcomanda) ' 
    'VALUES(%s, %s, %s)', (name, price, session.idcomanda))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'message': 'Producto añadido correctamente'}), 201