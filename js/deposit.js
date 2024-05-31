document.getElementById("btn-deposit").addEventListener("click", function () {
  // Get the deposit amount
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmount = parseFloat(depositInput.value);

  // Validate the input
  if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
    alert("Please enter a valid deposit amount");
    return;
  }

  // Update deposit total
  const depositTotal = document.getElementById("update-deposit");
  const previousDepositAmount = parseFloat(depositTotal.innerText);
  const updatedDepositAmount = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = updatedDepositAmount.toFixed(2);

  // Update balance
  const balanceTotal = document.getElementById("update-balance");
  const previousBalance = parseFloat(balanceTotal.innerText);
  const updatedBalance = previousBalance + newDepositAmount;
  balanceTotal.innerText = updatedBalance.toFixed(2);

  // Clear the input field
  depositInput.value = "";
});
