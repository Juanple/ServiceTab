from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def postProducts():
    data = request.get_json()
    print(data)
    return jsonify({'message': 'Datos recibidos'}), 201   

if __name__ == '__main__':
    app.run(debug=True)