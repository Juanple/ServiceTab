from flask import request, jsonify, Blueprint
from connection import getConnection
import session

waiter = Blueprint('waiter', __name__)

@waiter.route('/', methods=['POST'])
def saveWaiterInfo():
    data = request.get_json()
    waiterName = data['waiter']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM waiter WHERE name = %s', (waiterName))
    response = cursor.fetchall() # Verificar si ya existe el camarero en la db

    if len(response) == 0: # En caso de que no:
        # Insertar datos del camarero en la tabla
        cursor.execute('INSERT INTO waiter (name) VALUES (%s)', (waiterName))

    # Sacar el idwaiter de la tabla y pasarselo al archivo de sesion
    cursor.execute('SELECT idwaiter FROM waiter WHERE name = %s', (waiterName))
    idwaiter = cursor.fetchall()
    session.idwaiter = idwaiter[0][0]
    
    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'message': 'Camarero añadido'}), 201