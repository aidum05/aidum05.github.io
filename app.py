# app.py

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    molecular_weight = data.get("molecular_weight")
    concentration = data.get("concentration")
    volume = data.get("volume")
    solute_mass = data.get("solute_mass")
    mode = data.get("mode")

    try:
        if mode == "solute_mass":
            if volume is None:
                return jsonify(error="Volume is required for solute mass calculation"), 400
            solute_mass = concentration * volume * molecular_weight
            return jsonify(result=solute_mass)

        elif mode == "solvent_volume":
            if solute_mass is None:
                return jsonify(error="Solute mass is required for volume calculation"), 400
            volume = solute_mass / (concentration * molecular_weight)
            return jsonify(result=volume)

        else:
            return jsonify(error="Invalid calculation mode"), 400

    except Exception as e:
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)
