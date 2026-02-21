document.getElementById("add-money-btn").addEventListener("click", function() {
  const select = document.getElementById("select-bank")
  const selectBank = select.value;
  if (selectBank == "Select back") {
    alert("Please select a bank")
    return;
  }

  const bankAccount = document.getElementById("bank-account-number");
  const accountNumber = bankAccount.value;
  if (accountNumber == "01234567890") {
  } else {
    alert("please provide a valid account number")
    return;
  }

  const add =document.getElementById("add-amount");
  const addAmount = add.value;
  if (addAmount <= 0) {
    alert("please provide a valid amount")
    return;
  }

  const accountPIn = document.getElementById("addmoney-pin");
  const pin = accountPIn.value;
  if(pin == "1234") {

  } else {
    alert("please provide a valid pin")
    return;
  }

  const elementAmount = document.getElementById("amount");
  const currentAmount = elementAmount.innerHTML;
  const newAmount = Number(currentAmount) + Number(addAmount);
  elementAmount.innerText = newAmount;
})