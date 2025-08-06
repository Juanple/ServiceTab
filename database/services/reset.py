from flask import Blueprint, jsonify
from connection import getConnection

reset = Blueprint('reset',__name__)

@reset.route('/reset', methods=['DELETE'])
def resetTables():

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('DELETE FROM mesa')

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'message': 'reset correct'}), 200