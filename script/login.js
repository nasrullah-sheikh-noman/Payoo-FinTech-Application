document.getElementById('login-btn').addEventListener("click", function() {

  const mobileNumber = document.getElementById("number-input");
  const number = mobileNumber.value ;

  const pinNumber = document.getElementById("pin-input");
  const pin = pinNumber.value;
  if (number == '01234567890' && pin == "1234") {
    alert("login success");
    window.location.assign("/home.html")
  }
  else {
    alert("login failed");
    return;
  }


})