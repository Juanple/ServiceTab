import pymysql

def getConnection():
    return pymysql.connect(
    host = 'localhost',
    user = 'servicetab',
    password = 'Dequa20.',
    database = 'servicetab'
)