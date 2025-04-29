import React from 'react';
import './App.css';

// ✅ Import images from src/assets
import correlationMatrix from './assets/correlation_matrix.png';
import chargesBySmoker from './assets/charges_by_smoker.png';
import chargesByChildren from './assets/charges_by_children.png';
import bmiVsCharges from './assets/bmi_vs_charges.png';
import actualVsPredicted from './assets/actual_vs_predicted.png';
import residualPlot from './assets/residual_plot.png';
import featureImportance from './assets/feature_importance.png';

function ModelTraining() {
  return (
    <div className="content-container">
      <h2>Model Training Steps</h2>

      <h3>Step 1: Data Loading and Exploration</h3>
      <p>
        The insurance.csv dataset was loaded using Pandas, containing features such as age, sex, BMI, children,
        smoker status, region, and charges. Initial exploration confirmed no missing values. A correlation matrix was
        generated to identify relationships between features.
      </p>
      <img src={correlationMatrix} alt="Correlation Matrix" className="graph" />
      <p><strong>Correlation Matrix:</strong> This heatmap shows the correlation coefficients between all features and the target variable (charges). The smoker feature has a strong positive correlation (0.79) with charges, indicating its significant influence. Age (0.30) and BMI (0.20) also show moderate correlations, while sex and region have negligible correlations.</p>

      <img src={chargesBySmoker} alt="Charges by Smoker Status" className="graph" />
      <p><strong>Charges by Smoker Status:</strong> This histogram illustrates the distribution of insurance charges, separated by smoker status. Smokers tend to have higher charges, with a distinct peak around $20,000-$40,000, while non-smokers are concentrated below $15,000, highlighting the impact of smoking on costs.</p>

      <img src={chargesByChildren} alt="Charges by Children" className="graph" />
      <p><strong>Charges by Number of Children:</strong> This boxplot shows the distribution of charges across different numbers of children. Median charges slightly increase with more children, but outliers are present, especially for families with 0-3 children, suggesting variability in costs.</p>

      <h3>Step 2: Data Preprocessing</h3>
      <p>Categorical variables ('sex', 'smoker', 'region') were encoded into numerical values for model compatibility. In React JavaScript, you can do this as follows:</p>

        <code>
{`const transformedData = originalData.map(item => ({
  ...item,
  sex: item.sex === 'female' ? 0 : 1,
  smoker: item.smoker === 'no' ? 0 : 1
}));`}
        </code>

      <img src={bmiVsCharges} alt="BMI vs Charges" className="graph" />
      <p><strong>BMI vs Charges:</strong> This scatter plot visualizes the relationship between BMI and charges, colored by smoker status. Smokers with higher BMI tend to have significantly higher charges, forming a cluster above $30,000, while non-smokers show a weaker relationship, emphasizing the interaction between BMI and smoking.</p>

      <h3>Step 3: Model Training and Evaluation</h3>
      <p>Multiple models were trained, including Linear Regression, SVR, Random Forest, Gradient Boosting, and XGBoost. Performance was evaluated using R² scores and 5-fold cross-validation. XGBoost was selected due to its superior test R² (0.90) and cross-validation score (0.86).</p>

      <img src={actualVsPredicted} alt="Actual vs Predicted Charges" className="graph" />
      <p><strong>Actual vs Predicted Charges:</strong> This scatter plot compares actual insurance charges to those predicted by the XGBoost model. Points close to the red dashed line (y=x) indicate accurate predictions. The model performs well for lower charges but shows some deviation for higher values, suggesting room for improvement in extreme cases.</p>

      <img src={residualPlot} alt="Residual Plot" className="graph" />
      <p><strong>Residual Plot:</strong> This plot shows the residuals (actual - predicted charges) against predicted charges. A random scatter around the zero line indicates no systematic bias. The model shows slight clustering at lower predictions, but residuals are generally well-distributed, confirming a good fit.</p>

      <h3>Step 4: Feature Importance and Selection</h3>
      <p>Feature importance was analyzed using the XGBoost model, leading to the removal of 'sex' and 'region' due to their low importance scores (0.00 and 0.007, respectively).</p>
      <img src={featureImportance} alt="Feature Importance" className="graph" />
      <p><strong>Feature Importance:</strong> This bar plot shows the importance of each feature in the XGBoost model. Smoker status dominates with an importance of 0.81, followed by BMI (0.13) and age (0.04). Children have a minor contribution (0.01), justifying the exclusion of less impactful features like sex and region.</p>

      <h3>Step 5: Final Model Training</h3>
      <p>The final XGBoost model was trained with optimized parameters (n_estimators=15, max_depth=3, gamma=0) on the reduced feature set (age, BMI, children, smoker). It achieved a test R² of 0.90 and was saved as 'insurancemodelf.pkl' for deployment.</p>
    </div>
  );
}

export default ModelTraining;
