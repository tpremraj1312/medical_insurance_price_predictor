import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PredictionForm from './PredictionForm.jsx';
import ModelTraining from './ModelTraining.jsx';
import About from './About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/model-training">Model Training</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={
              <div className="landing-page">
                <h1>Welcome to the Insurance Cost Predictor</h1>
                <p>Enter your details below to get an estimate of your insurance costs.</p>
                <PredictionForm />
              </div>
            } />
            <Route path="/model-training" element={<ModelTraining />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
