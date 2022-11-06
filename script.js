// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");//BUTTON


// Write password to the #password input
function writePassword() {
  var password = generatePassword();//FUNCTION AT LINE 19
  //after
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var specialChar = "!#$%&'()*+-./:;<=>?@[\]^_`{|}~"
  var passLength = prompt('How long???');
  var tempPass = []; //<-- EMPTY ARRAY
  var randomNumber = Math.floor(Math.random() * specialChar.length);

  for(i = 0; i < passLength; i++) {
    if(passLength < 8 || passLength > 128) {
      result = alert('DENIED!, PLEASE ENTER BETWEEN 8 - 128!!')
      break; //DENIED
    } else {
      tempPass.push(specialChar[i])//WILL ADD EVERY CHARAC AT [i]
    }
    }
  
    // function shuffleChar(char) {
    //   var randomNumber = Math.floor(Math.random() * specialChar.length);
    //   var result = []
    //   for(var i = 0; i < char.length; i++) {
    //     result.push(char[i * randomNumber])
    //   }

    //   return result.join('')
    // }

  
  var passComplete = tempPass.join(''); // REMOVES COMMAS BETWEEN BECAUSE ITS AN ARRAY
  var result = document.querySelector('#password').innerHTML = passComplete;
  return result
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
