from flask import Flask, request, render_template
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained hybrid model
model = joblib.load('hybrid_model.pkl')

@app.route('/')
def home():
    return render_template('test.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Extracting values from the form
    input_data = [float(request.form['ID']),
                  float(request.form['year']),
                  float(request.form['loan_limit']),
                  float(request.form['Gender']),
                  float(request.form['approv_in_adv']),
                  float(request.form['loan_type']),
                  float(request.form['loan_purpose']),
                  float(request.form['Credit_Worthiness']),
                  float(request.form['open_credit']),
                  float(request.form['business_or_commercial']),
                  float(request.form['rate_of_interest']),
                  float(request.form['Interest_rate_spread']),
                  float(request.form['Neg_ammortization']),
                  float(request.form['interest_only']),
                  float(request.form['lump_sum_payment']),
                  float(request.form['construction_type']),
                  float(request.form['occupancy_type']),
                  float(request.form['Secured_by']),
                  float(request.form['total_units']),
                  float(request.form['credit_type']),
                  float(request.form['Credit_Score']),
                  float(request.form['co-applicant_credit_type']),
                  float(request.form['age_encoded']),
                  float(request.form['submission_of_application']),
                  float(request.form['Region']),
                  float(request.form['Security_Type']),
                  float(request.form['dtir1']),
                  float(request.form['incomelog']),
                  float(request.form['loan_amountlog']),
                  float(request.form['termlog']),
                  float(request.form['Upfront_chargeslog']),
                  float(request.form['property_valuelog']),
                  float(request.form['LTVlog'])]

    # Convert the list into a numpy array and reshape for the model
    features_array = np.array([input_data])

    # Make the prediction using the loaded model
    prediction = model.predict(features_array)[0]

    return render_template('index.html', prediction_text=f'Predicted Loan Status: {prediction}')

if __name__ == '__main__':
    app.run(debug=True)
