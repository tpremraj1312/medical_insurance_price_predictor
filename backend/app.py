from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

# Load the trained model
with open("insurancemodelf.pkl", "rb") as f:
    model = pickle.load(f)

# Smoker mapping
smoker_map = {'yes': 1, 'no': 0}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Use only the features used during model training
        age = int(data['age'])
        bmi = float(data['bmi'])
        children = int(data['children'])
        smoker = smoker_map[data['smoker'].lower()]  # yes -> 1, no -> 0

        features = np.array([[age, bmi, children, smoker]])
        prediction = model.predict(features)

        return jsonify({'predicted_charges': round(float(prediction[0]), 2)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,host="localhost", port=5000)
