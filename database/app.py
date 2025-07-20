from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

@app.route('/<path:ruta>', methods=['GET', 'POST', 'OPTIONS'])
def guardarDatos(ruta):
    if request.method == 'OPTIONS':
        return '', 200

    elif request.method == 'POST':
        data = request.get_json()
        print(f'Data: {data}, Ruta: {ruta}')
        return jsonify({'message': 'Datos recibidos correctamente'}), 201

    else:
        return jsonify({'message': f'Datos recibidos por GET en {ruta}'}), 200

@app.after_request
def aplicar_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


if __name__ == '__main__':
    app.run(debug=True)