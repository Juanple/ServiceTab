import session
from flask import jsonify, Blueprint
from connection import getConnection

header = Blueprint('header', __name__)
@header.route('/', methods=['GET'])
def getHeaderInfo():

    connection = getConnection()
    cursor = connection.cursor()

    idwaiter = session.idwaiter

    cursor.execute('SELECT name FROM waiter WHERE idwaiter = %s',(idwaiter,))
    response = cursor.fetchall()
    waiterName = None

    if len(response) != 0:
        waiterName = response[0][0]

    return jsonify({'waiter': waiterName}), 200