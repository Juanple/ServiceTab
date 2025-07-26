from flask import request, jsonify, Blueprint
from connection import getConnection
import session
from routes.comanda import saveComandaInfo

table = Blueprint('table',__name__)

@table.route('/tables', methods=['POST'])
def saveTableInfo():
    data = request.get_json()
    tableNumber = data['table']
    rangeNumber = data['range']

    connection = getConnection()
    cursor = connection.cursor()
 
    cursor.execute('SELECT idmesa FROM mesa WHERE mesa.tableNumber = %s',(tableNumber))
    response = cursor.fetchall() # Verificar si la mesa ya esta en la db

    if(len(response) == 0): # En caso de que no:
        # Insertamos datos de la mesa en la db
        cursor.execute('INSERT INTO mesa (tableNumber, rangeNumber) VALUES (%s, %s)', (tableNumber, rangeNumber))

    # Guardamos el idmesa en el archivo de sesion
    cursor.execute('SELECT idmesa FROM mesa WHERE tableNumber = %s', (tableNumber))
    idmesa = cursor.fetchall()
    session.idmesa = idmesa[0][0]

    connection.commit()
    cursor.close()
    connection.close()

    saveComandaInfo()

    return jsonify({'message': 'Mesa añadida'}), 201


