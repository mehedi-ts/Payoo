const numberEl = document.getElementById("agent-number");
const amountEl = document.getElementById("amount");
const pinEl = document.getElementById("password");

const btnEl = document.getElementById("cashout-btn");
const cashEl = document.getElementById("cash");

btnEl.addEventListener("click", function () {
  const agentNumber = numberEl.value;
  const pinNumber = pinEl.value;
  const amount = amountEl.value;
  function emptyInputAll() {
    numberEl.value = "";
    amountEl.value = "";
    pinEl.value = "";
  }
  if (
    isNaN(Number(agentNumber)) ||
    isNaN(Number(pinNumber)) ||
    isNaN(Number(amount))
  ) {
    alert("Please Provide a valid agent number ,pin number or amount number.");
    emptyInputAll();
    return;
  }
  if (agentNumber.length !== 11 || pinNumber.length !== 4) {
    alert("Agent number must be 11 digits and PIN must be 4 digits");
    emptyInputAll();
    return;
  }
  const finalBlance = Number(cashEl.innerText) - Number(amount);
  if (finalBlance < 0) {
    alert("Not enough balance to complete this transaction.");
    emptyInputAll();
    return;
  }
  alert("Cash out completed successfully.");
  cashEl.innerText = finalBlance;
  emptyInputAll();
});
