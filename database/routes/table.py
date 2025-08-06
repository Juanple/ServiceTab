from flask import request, jsonify, Blueprint
from connection import getConnection
import session
from routes.comanda import saveComandaInfo

table = Blueprint('table',__name__)

@table.route('/tables', methods=['POST']) #POST
def saveTableInfo():
    data = request.get_json()
    tableNumber = data['table']
    rangeNumber = data['range']
    comensales = data['comensales']

    connection = getConnection()
    cursor = connection.cursor()
 
    cursor.execute('SELECT idmesa FROM mesa WHERE mesa.tableNumber = %s',(tableNumber))
    response = cursor.fetchall() # Verificar si la mesa ya esta en la db

    if(len(response) == 0): # En caso de que no:
        # Insertamos datos de la mesa en la db
        cursor.execute('INSERT INTO mesa (tableNumber, rangeNumber, comensales) VALUES (%s, %s, %s)', (tableNumber, rangeNumber, comensales, ))

    # Guardamos el idmesa en el archivo de sesion
    cursor.execute('SELECT idmesa FROM mesa WHERE tableNumber = %s', (tableNumber))
    idmesa = cursor.fetchall()
    session.idmesa = idmesa[0][0]

    connection.commit()
    cursor.close()
    connection.close()

    saveComandaInfo()

    return jsonify({'message': 'Mesa añadida'}), 201

@table.route('/tables', methods=['GET']) # GET solo de numero de mesa activo
def getActiveTables():

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT tableNumber FROM mesa')
    response = cursor.fetchall()

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'data': response}), 200

@table.route('/tables/<int:table_number>', methods=['DELETE']) # DELETE
def deleteTable(table_number):

    connection = getConnection()
    cursor = connection.cursor()

    if table_number < 231 or table_number > 350:
        return jsonify({'response': f'La mesa {table_number} no existe'})
    
    cursor.execute('DELETE FROM mesa WHERE tableNumber = %s', (table_number, ))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'response': 'Mesa cerrada'}), 200


