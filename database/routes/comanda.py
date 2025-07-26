from connection import getConnection
import session

def saveComandaInfo():
    connection = getConnection()
    cursor = connection.cursor()

    # Sacar datos del archivo de sesion
    idmesa = session.idmesa
    idwaiter = session.idwaiter

    # Insertar datos de la comanda en la db
    cursor.execute('INSERT INTO comanda(idmesa, idwaiter) VALUES(%s, %s)', (idmesa, idwaiter))

    # Sacar idcomanda e introducirlo en el archivo de session
    cursor.execute('SELECT idcomanda FROM comanda WHERE idmesa = %s', (idmesa))
    idcomanda = cursor.fetchall()
    session.idcomanda = idcomanda[0][0]

    connection.commit()
    cursor.close()
    connection.close()

    return None