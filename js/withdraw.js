document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Get the withdraw amount
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawAmount = parseFloat(withdrawInput.value);

  // Validate the input
  if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
    alert("Please enter a valid withdraw amount");
    return;
  }

  // Get the current balance
  const balanceTotal = document.getElementById("update-balance");
  const previousBalance = parseFloat(balanceTotal.innerText);

  // Check if sufficient balance is available
  if (newWithdrawAmount > previousBalance) {
    alert("Insufficient balance");
    return;
  }

  // Update withdraw total
  const withdrawTotal = document.getElementById("total-withdraw");
  const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
  const updatedWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotal.innerText = updatedWithdrawAmount.toFixed(2);

  // Update balance
  const updatedBalance = previousBalance - newWithdrawAmount;
  balanceTotal.innerText = updatedBalance.toFixed(2);

  // Clear the input field
  withdrawInput.value = "";
});
