import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function PredictionForm() {
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [children, setChildren] = useState('');
  const [smoker, setSmoker] = useState('no');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        age: parseInt(age),
        bmi: parseFloat(bmi),
        children: parseInt(children),
        smoker: smoker.toLowerCase(),
      });

      if (response.data && response.data.predicted_charges !== undefined) {
        setPrediction(response.data.predicted_charges.toFixed(2));
      } else {
        setError('Prediction failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please check backend or CORS settings.');
    }
  };

  return (
    <div className="form-container">
      <h2>Insurance Cost Predictor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>BMI: </label>
          <input
            type="number"
            value={bmi}
            step="0.1"
            onChange={(e) => setBmi(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Children: </label>
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Smoker: </label>
          <select
            value={smoker}
            onChange={(e) => setSmoker(e.target.value)}
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <p className="prediction">
          <strong>Predicted Insurance Cost: ₹ {prediction}</strong>
        </p>
      )}

      {error && (
        <p className="error">{error}</p>
      )}
    </div>
  );
}

export default PredictionForm;