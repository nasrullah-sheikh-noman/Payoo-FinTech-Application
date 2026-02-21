document.getElementById("withdraw-btn").addEventListener("click", function() {
  const agent = document.getElementById("agent-number");
  const agentNumber = agent.value;

  const cashOutAmount = document.getElementById("cashout-amount");
  const amount = cashOutAmount.value;

  const pinNum = document.getElementById("cashout-pin");
  const pin = pinNum.value;
  console.log(pin);
})