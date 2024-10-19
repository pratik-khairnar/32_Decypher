document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Map categorical variables to numeric values based on alphabetical order
    const genderMap = {
        "Female": 0,
        "Joint": 1,
        "Male": 2,
        "Sex not available": 3
    };

    const loanTypeMap = {
        "Business": 0,
        "Commercial": 1
    };

    const regionMap = {
        "Central": 0,
        "North": 1,
        "North-East": 2,
        "South": 3
    };

    const ageGroupMap = {
        "under25": 0,
        "25-34": 1,
        "35-44": 2,
        "45-54": 3,
        "55-64": 4,
        "65-74": 5,
        "above74": 6
    };

    const loanPurposeMap = {
        "Investment": 0,
        "Primary": 1,
        "Secondary": 2
    };

    const propertyTypeMap = {
        "P1": 0,
        "P2": 1,
        "P3": 2,
        "P4": 3
    };

    const loanCategoryMap = {
        "Type1": 0,
        "Type2": 1,
        "Type3": 2
    };

    // Get form data and apply conversions based on alphabetical order
    const formData = {
        gender: genderMap[document.getElementById('dropdown3').value],
        loanType: loanTypeMap[document.getElementById('dropdown4').value],
        creditScore: parseFloat(document.getElementById('creditScore').value),
        region: regionMap[document.getElementById('dropdown6').value],

        // Apply logarithmic transformation to the relevant fields
        income: Math.log(parseFloat(document.getElementById('income').value)),
        loanAmount: Math.log(parseFloat(document.getElementById('loanAmount').value)),
        loanTerm: Math.log(parseFloat(document.getElementById('loanTerm').value)),
        interestRateSpread: Math.log(parseFloat(document.getElementById('interestRate').value)),

        ageGroup: ageGroupMap[document.getElementById('dropdown10').value],
        loanPurpose: loanPurposeMap[document.getElementById('dropdown11').value],
        propertyType: propertyTypeMap[document.getElementById('dropdown12').value],
        loanCategory: loanCategoryMap[document.getElementById('dropdown13').value]
    };

    // Send the form data to the Flask backend for prediction
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Display the prediction result
        const resultDiv = document.createElement('div');
        if (data.approved === 1) {
            resultDiv.innerHTML = "<h2>Congratulations! Your loan is approved.</h2>";
        } else {
            resultDiv.innerHTML = "<h2>Sorry, your loan application was not approved.</h2>";
        }
        document.body.appendChild(resultDiv);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



