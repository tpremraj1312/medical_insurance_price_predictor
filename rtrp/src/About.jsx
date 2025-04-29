import React from 'react';
import './App.css';

function About() {
  return (
    <div className="content-container">
      <h2>About</h2>
      <p>This project utilizes several machine learning models to predict insurance costs based on user inputs such as age, BMI, number of children, and smoking status. Below is an overview of the models explored:</p>
      <ul>
        <li>
          <strong>Linear Regression</strong>: A simple model that assumes a linear relationship between the input features and the target variable (insurance charges). It’s easy to interpret but may not capture complex patterns.
        </li>
        <li>
          <strong>Support Vector Regression (SVR)</strong>: Uses support vector machines to perform regression, capable of modeling non-linear relationships with the help of kernel functions. It performed poorly in this case due to data complexity.
        </li>
        <li>
          <strong>Random Forest Regressor</strong>: An ensemble method that builds multiple decision trees and averages their predictions. It handles non-linear data well and is robust to overfitting.
        </li>
        <li>
          <strong>Gradient Boosting Regressor</strong>: Builds trees sequentially, where each tree corrects the errors of the previous ones. It offers high accuracy but requires careful tuning.
        </li>
        <li>
          <strong>XGBoost Regressor</strong>: An advanced implementation of gradient boosting optimized for performance and scalability. It was selected as the final model due to its superior R² score and generalization ability after hyperparameter tuning and feature selection.
        </li>
      </ul>
      <p>The final model, XGBoost, was chosen after evaluating all models based on training accuracy, testing accuracy, and cross-validation scores. Features 'sex' and 'region' were dropped based on their low importance, leaving 'age', 'bmi', 'children', and 'smoker' as the key predictors.</p>
    </div>
  );
}

export default About;