from flask import request, jsonify, Blueprint
from connection import getConnection
import session

product = Blueprint('product', __name__)

@product.route('/tables/menu-general/', methods=['POST']) # POST
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

@product.route('/tables/menu-general/', methods=['GET']) # GET
def getProductInfo():

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT idproduct, name, price FROM product WHERE idcomanda = %s', (session.idcomanda, ))
    response = cursor.fetchall()

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'data': response}), 200

@product.route('/tables/menu-general/<int:id_product>', methods=['DELETE']) # DELETE
def deleteProduct(id_product):
    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('DELETE FROM product WHERE idproduct = %s', (id_product, ))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'message': 'producto eliminado'}), 200