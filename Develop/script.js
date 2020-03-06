// Set static variables
// The split() method is used to split a string into an array of substrings, and returns the new array

var lowChar = "abcdefghijklmnopqrstuvwxyz";
var lowCharArr = lowChar.split("");
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var capCharArr = capChar.split("");
var numChar = "0123456789";
var numCharArr = numChar.split("");
var speChar = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
var speCharArr = speChar.split("");

// Calls the action to generate password
function generatePass() {
  var allChars = [];
  var resultPass = "";

  // number of characters the user input for the password
  var passLenCk = prompt("Between 8 and 128 characters, who long should your password be?");

  if (passLenCk < 8 || passLenCk > 128) {
    alert("Please input a value between 8 and 128!");
}

  // Checks what options does the user selected
  else {
    if (confirm("Should password have lower case?")) {
        Array.prototype.push.apply(allChars, lowCharArr);
    }
    if (confirm("Should password have Upper case?")) {
      Array.prototype.push.apply(allChars, capCharArr);
    }
    if (confirm("Should password have Numbers?")) {
      Array.prototype.push.apply(allChars, numCharArr);
    }
    if (confirm("Should password have Special characters?")) {
      Array.prototype.push.apply(allChars, speCharArr);
    }
    if (allChars.length === 0) {
      alert(
        "You must select at lease 1 type of characters to generate a password!"
      );
    }

    // Loop that generate the romdon password
    else {
      for (var i = 0; i < passLenCk; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        resultPass += allChars[random];
      }
    }
  }

  // Display the result

  document.getElementById("password").innerHTML = resultPass;
}

// This makes the clipboard

function copyPass() {
  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
