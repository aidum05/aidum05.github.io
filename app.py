from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.json
    molecular_weight = data.get("molecular_weight", 0)
    concentration = data.get("concentration", 0)
    result = molecular_weight * concentration
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
