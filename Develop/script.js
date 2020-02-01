
var numChar = "0123456789";
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var speChar = "!#$%&'()*+,-./:<=>?@[]^_`{|}~";

var passDisplay = document.getElementById("password").value;

var passBtn = document.querySelector("#generate");

passBtn.addEventListener("click", passGen);

function passGen() {
  passLenCk();
  var passNum = confirm("Should password has Number?");
  var passLower = confirm("Should password has lower case?");
  var passUpper = confirm("Should password has Upper case?");
  var passSpec = confirm("Should password has Special characters?");
}

function passLenCk() {
  var passLen = prompt("Who long do you want your password to be?");
  if (!((passLen >= 8) & (passLen <= 128))) {
    alert("wrong range.  Please try again!");
    passLenCk();
  }
  return passLen;
}

function passStatus() {
  var element = "";
  if (passNum) {
    element += numChar;
    if (passLower) {
      element += lowChar;
      if (passUpper) {
        element += capChar;
        if (passSpec) {
          element += speChar;
          console.log(element + "Did I get it?");
        }
      }
    }
  }
}
