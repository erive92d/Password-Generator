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


  function includeSpec(words) {
    var options = prompt('Want special Characters? y/n')
    if (options.toLowerCase === 'n') {
      words = 'ABCDEFGHIJKLMNOP1234567890'
    } else {
      return words
    }
  }
  //SHUFFLE CHARACTERS
  function shufflePass(array) {
    // for(var i = array.length - 1; i > 0; i--) {
    for (var i = 0; i < array.length; i++) {
      var randomNum = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[randomNum];
      array[randomNum] = temp;
    }
    return array;

  }

  // function includeSpec(words) {
  //   var options = prompt('Want special Characters? y/n')
  //   var result = ''
  //   if(options === 'n') {
  //     result = 'ABCDEFGHIJKLMNOP1234567890'
  //   } else {
  //     return words
  //   }
  //   return result
  // }

  //var specialChar = "!#$%&'()*+-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"


  //FOR SPECIAL CHARS
  var options = prompt('Would you like to add Special Characters? (y/n)')
  var result = ''
  if (options.toLowerCase() === 'y') {
    result = "!#$%&'()*+-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  } else if (options.toLowerCase() === 'n') {
    result = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  } else {
    result = 'Invalid'
  }
  
  var upperOrLower = prompt('Press L for lowerCase, U for upperCase')
  if(upperOrLower.toLowerCase() === 'l') {
    result = result.toLowerCase()
  } else {
    result = result.toLocaleUpperCase();
  }
  

  var passLength = prompt('How long???');
  var mixedChar = shufflePass(result.split(''));//CONVERTS STRING TO ARRAY
  var tempPass = []; //<-- EMPTY ARRAY
  var randomNumber = Math.floor(Math.random() * mixedChar.length);

  for (i = 0; i < passLength; i++) {
    if (passLength < 8 || passLength > 128) {
      result = alert('DENIED!, PLEASE ENTER BETWEEN 8 - 128!!')
      break; //DENIED
    } else {
      tempPass.push(mixedChar[i])//WILL ADD EVERY CHARAC AT [i]
    }
  }




  var passComplete = tempPass.join(''); // REMOVES COMMAS BETWEEN BECAUSE ITS AN ARRAY
  var result = document.querySelector('#password').innerHTML = passComplete;
  return result
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
