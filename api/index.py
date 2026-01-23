from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api')
def home():
    return jsonify({"message": "HELLO TESTING FLASK"})

@app.route('/api/data')
def get_data():
    return jsonify({
        "data": [1, 2, 3, 4, 5],
        "status": "success"
        })

if __name__ == '__main__':
    app.run(debug=True, port=5000) #local testing
