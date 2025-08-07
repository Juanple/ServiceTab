from flask import Blueprint,jsonify
import session
from connection import getConnection
import os

printCuenta = Blueprint('printCuenta', __name__)

@printCuenta.route('/tables/menu-general/printCuenta', methods=['POST'])
def create_cuenta():
    
    connection = getConnection()
    cursor = connection.cursor()

    ruta_actual = os.path.dirname(os.path.abspath(__file__))
    ruta_cuenta = os.path.join(ruta_actual, 'cuenta.txt') # Sacar ruta del archivo cuenta.txt

    cursor.execute('SELECT tableNumber, rangeNumber from mesa WHERE idmesa = %s', (session.idmesa, ))
    info_mesa = cursor.fetchall()
    tableNumber = info_mesa[0][0]
    rangeNumber = info_mesa[0][1]

    cursor.execute('SELECT price FROM product WHERE idcomanda = %s', (session.idcomanda, ))
    product_price_list = cursor.fetchall()
    total_price = 0

    for i in product_price_list:
        total_price += i[0]

    with open(ruta_cuenta, 'w') as f:
        f.write(f'Mesa: {tableNumber} | Rango: {rangeNumber}\n')
        f.write(f'__________________________________________________\n\n')
        f.write(f'Total a pagar: {total_price}')

    connection.commit()
    cursor.close()
    connection.close()