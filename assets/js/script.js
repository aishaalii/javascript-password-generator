// Assignment code here
var generatePassword = document.querySelector ("generate")
/// Variables
var upper = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcedfghijklomnpqrstuvwxyz";
var special = "!@#$%^&()+=:<>?,.";
var numbers = "1234567890"
var allChars

function generatePassword () {
    
var password = "" ;
var passwordchar = "";

// prompts user to pick password length
var password Length
enter = parseInt (prompt ("how many character would you like your password? You must choose between 8 and 128"));
var length = alert ()
    

return "generated password will go right here!!!!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);