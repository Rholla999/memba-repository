function calculateLoan() {
  loanAmountValue = document.getElementById('loan-amount').value;

  interestRateValue = document.getElementById('interest-rate').value;

  monthstoPayValue = document.getElementById('month-to-pay').value;

  interest = (loanAmountValue * (interestRateValue * 0.1)) / monthstoPayValue;

  monthlyPayment = loanAmountValue / monthstoPayValue + interest;

  document.getElementById(
    'payment'
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
