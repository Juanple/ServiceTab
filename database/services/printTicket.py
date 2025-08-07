from flask import Blueprint, jsonify
from connection import getConnection
import session
import os

def print_ticket():
    return ''

printTicket = Blueprint('printTicket',__name__)

@printTicket.route('/tables/menu-general/printTicket', methods=['POST'])
def create_ticket():

    connection = getConnection()
    cursor = connection.cursor()

    ruta_actual = os.path.dirname(os.path.abspath(__file__))
    ruta_ticket = os.path.join(ruta_actual, 'ticket.txt') # Sacar ruta del archivo ticket.txt

    final_idproduct = 0
    with open(ruta_ticket, 'r') as f: # Sacar el idproduct donde nos quedamos
        lineas = f.readlines()
        final_idproduct = lineas[0]

    # Sacar la lista de productos
    cursor.execute('SELECT * FROM product WHERE idproduct > %s && idcomanda = %s', (final_idproduct, session.idcomanda))
    response = cursor.fetchall()

    # Sacar info mesa
    cursor.execute('SELECT * FROM mesa WHERE idmesa = %s', (session.idmesa, ))
    info_mesa = cursor.fetchall()
    tableNumber = info_mesa[0][1]
    rangeNumber = info_mesa[0][2]
    
    with open(ruta_ticket, 'w') as f: # Escribir ultimo id y info de mesa
        f.write(f'{response[-1][0]}\n')
        f.write(f'Mesa: {tableNumber} | Rango: {rangeNumber}\n')
        f.write('_________________________________________________\n\n')


    for product in response:
        name = product[1]

        with open(ruta_ticket, 'a') as f: # Escribir los productos
            f.write(f'{name}\n')

    print_ticket()

    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'message': 'OK'}), 200
    