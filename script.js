// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var result = '' 
    var chars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passLength = 10;


    //Loop over * passLength(8)
    for(var i = 0; i < passLength; i++) { 
      var randomNumber = Math.floor(Math.random() * chars.length);
      result += chars.substring(randomNumber, randomNumber + 1); //Start, end, + 1
    }

    return result
    

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
