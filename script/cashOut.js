document.getElementById("withdraw-btn").addEventListener("click", function() {
  const agent = document.getElementById("agent-number");
  const agentNumber = agent.value;
  const length = agentNumber.length;
  if(length != 11) {
    alert("please provide a valid agent number")
    return;
  }

  const cashOutAmount = document.getElementById("cashout-amount");
  const amount = cashOutAmount.value;
  if(amount <= 0) {
    alert("Please provide a valid amount");
  }

  const pinNum = document.getElementById("cashout-pin");
  const pin = pinNum.value;
  if(pin != 1234) {
    alert("please provide a original pin")
  }

  const elementAmount = document.getElementById("amount");
  const currentAmount = elementAmount.innerHTML;
  const newAmount = Number(currentAmount) - Number(amount);
  elementAmount.innerText = newAmount;
})