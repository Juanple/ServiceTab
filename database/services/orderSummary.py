from flask import request, jsonify, Blueprint
from connection import getConnection
import session

orderSummary = Blueprint('orderSummary', __name__)

@orderSummary.route('/tables/menu-general/', methods=['GET'])
def getOrderSummaryInfo():

    connection = getConnection()
    cursor = connection.cursor()

    # Pedir los datos del rango y numero de la mesa
    cursor.execute('SELECT tableNumber, rangeNumber FROM comanda JOIN mesa ' \
    'ON(comanda.idmesa = mesa.idmesa && comanda.idcomanda = %s)',(session.idcomanda, )) 
    response = cursor.fetchall()
    
    tableNumber = response[0][0]
    rangeNumber = response[0][1]

    # Pedir los productos
    cursor.execute('SELECT name, price FROM product WHERE idcomanda = %s',(session.idcomanda, ))
    response = cursor.fetchall()
    productList = response

    connection.commit()
    cursor.close()
    connection.close()
    
    return jsonify({'tableNumber': tableNumber, 'rangeNumber': rangeNumber, 'productList': productList}), 200