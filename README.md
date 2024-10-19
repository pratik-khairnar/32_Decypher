# ML_model
Meaning of column names:
1)ID: Unique identifier for each loan record. 

2)year: Year of loan issuance. 

3)loan_limit: Loan limit category. 
4)Gender: Loan applicant gender.
5)approv_in_adv: Indicates whether the loan has been pre-approved.
6)loan_type: Type of loan. 
7)loan_purpose: Purpose of the loan.
8)Credit_Worthiness: The extent to which a person or company is considered suitable for receiving financial credit is often based on its reliability in     
                     repaying money in the past.
                     
9)open_credit: Indicates whether the applicant has other open credits.
10)business_or_commercial: Whether the loan is for business or commercial. 
11)loan_amount: Total loan amount.
12)rate_of_interest: Loan interest rate. 
13)Interest_rate_spread: Interest rate differential relative to a benchmark index. (Interest rate spread is the interest rate charged by banks on loans to 14)private sector customers minus the interest rate paid by commercial or similar banks for demand, time, or savings deposits.)
15)Upfront_charges: Initial charges for the loan. term: Loan duration in months. (An upfront fee is a payment made to a lender when applying for a loan, which covers the costs of processing the application. It's also known as an application fee or establishment fee. )
 
16)Neg_ammortization: Indicates whether there is negative amortization. (In finance, negative amortization occurs whenever the loan payment for any period is less than the interest charged over that period so that the outstanding balance of the loan increases. )
 
 17)interest_only: Whether the loan allows for interest-only payments. (An interest-only loan allows a borrower to pay only the interest on a loan for a set period of time, while the principal remains unpaid.)
 
18)lump_sum_payment: Indicates whether there is an option to pay in a single installment. 
19)property_value: Value of the property associated with the loan. (Property valuation serves as a risk management tool for lenders. It evaluates marketability and collateral suitability. Accurate valuation reduces the risk of lending more than the property's value, minimising potential losses in the case of loan default.)
 
20)construction_type: Type of construction of the property. (This loan is generally opted when you wish to construct a residential house for personal use or investment purposes, such as 'sb' (stick-built) or 'mh' (manufactured home).)

21)occupancy_type: Type of property occupancy (While evaluating whether a home loan needs to be given, the type of occupancy, such as 'pr' (primary residence), 'sr' (secondary residence), or 'ir' (investment residence) is important)

22)Secured_by: Type of loan guarantee (Whether the loan is secured by 'home' or 'land')
23)total_units: Number of units related to the loan. (The total number of units in the property (e.g., '1U' for one unit, '2U' for two units, etc.).)
24)income: Loan applicant's income. 
25)credit_type: Type of credit check used. (The credit bureau providing the credit score, such as 'EXP' (Experian), 'EQUI' (Equifax), 'CRIF', or 'CIB'.)
26)Credit_Score: Applicant's credit score. 
27)co-applicant_credit_type: Type of credit check for co-applicants. 
28)age: Age range of the applicant. 
29)submission_of_application: Loan application submission method. (Whether the application was submitted to an institution ('to_inst') or not ('not_inst').)
30)LTV (Loan to Value): Ratio of loan amount to property value. 
31)Region: Geographic region of the loan. 
32)Security_Type: Type of loan security.Direct security

The borrower uses an asset as a direct pledge against the loan. If the borrower defaults, the lender can seize the asset to recover any losses.) * (Indirect security -A third party, called a guarantor, takes responsibility for the loan repayment if the borrower defaults. A guarantee is a legally binding agreement that the )guarantor will make the lender whole if the borrower defaults.
Status: Loan Status (1 loan granted, 0 not granted) 
dtir1 (Debt to Income Ratio): Debt/income ratio of the applicant.
