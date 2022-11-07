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
  //------------FUNCTIONS-----------------

// FUNCTION FOR SHUFFLING LETTERS
  function shufflePass(array) {
    var newArray = array.split('')
    for (var i = 0; i < newArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[randomNum];
      newArray[randomNum] = temp;
    }
    return newArray;
// FUNCTION FOR LENGTH OF PASSWORD
  }
  function passLength(string) {
    var result = [];
    var option = prompt('Enter the password length') 
      for(var i = 0; i < option; i++) {
        if(option < 8 || option > 128) {
          return alert('Denied, enter 8 - 128')
        } else {
          result.push(string[i])
        }
      }
      return result
    }
// FUNCTION FOR ADDING SPECIAL CHARACTERS
  function specialC(string) {
    var result = confirm('Add special?') 
      if(result === true) {
        return string += "!#$%&'()*+-./:;<=>?@[\]^_`{|}~";
      } else {
        return string
      }
  }
// FUNCTION FOR LOWER OR UPPER CASE CHARACTERS
  function lowerOrUpper(string) {
    var result = confirm('Would you like to include lower case letters?')
    if(result === true) {
      return string.toLowerCase()
    } else {
      return string
    }
  }
// FUNCTION FOR ADDING NUMBERS

  function addNums(string) {
    var result = confirm('Want to add numbers? (y/n)')
    if(result === true) {
      return string += '1234567890'
    } else {
      return string
    }
  }
  //-------------------------------------------------------------------


  //----------------------FUNCTION EXPRESSIONS-------------------------

  //ORIGINAL CHARACTERS
  var originalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //STEP 1: ADD SPECIAL CHARACTERS IF TRUE
  var addSpecial = specialC(originalChars)
  console.log(addSpecial)

  //STEP 2: ADD NUMBERS IF TRUE
  var addNumbers = addNums(addSpecial)
  console.log(addNumbers)
  //STEP 3: LOWERCASE IF TRUE, UPPERCASE IF FALSE
  var letterSize = lowerOrUpper(addNumbers);
  console.log(letterSize)
  //STEP 4: MIXED SHUFFLE
  var mixedChar = shufflePass(letterSize)
  console.log(mixedChar)
  //STEP 5: HOW LONG THE PASSWORD WILL BE
  var howLong = passLength(mixedChar);
  console.log(howLong)


  
  var result = document.querySelector('#password').innerHTML = howLong;
  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

