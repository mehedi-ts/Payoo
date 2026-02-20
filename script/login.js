const numberEl = document.getElementById("number");
const passwordEl = document.getElementById("pin");

document.getElementById("login-btn").addEventListener("click", function () {
  const numberValue = numberEl.value.trim();
  const pinValue = passwordEl.value.trim();
  function inputEmpty() {
    numberEl.value = "";
    passwordEl.value = "";
  }
  if (isNaN(Number(numberValue)) || isNaN(Number(pinValue))) {
    alert("Please provide a valid number and pin.");
    inputEmpty();
    return;
  }
  if (numberValue !== "01234567890" || pinValue !== "1234") {
    alert("Invalid Number or Pin.");
    inputEmpty();
    return;
  }

  alert("login succeeded...");
  inputEmpty();
  window.location.replace("../home.html");
});
