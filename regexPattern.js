const prompt = require('prompt-sync')();

const PINCODE_REGEX_PATTERN = RegExp("^[0-9]{6}$");
const EMAIL_REGEX_PATTERN = RegExp("^[a-zA-Z0-9]{3}$");
// Create a regex pattern to validate PIN code 400088.
var pincode = parseInt(prompt("Enter pincode: "));
try{
    if(!PINCODE_REGEX_PATTERN.test(pincode)) throw "Invalid pincode"
        console.log("Valid pincode");
}catch(e){
    console.log(e);
}
//Validate Email address with a regex.
var email = prompt('Enter Email Here: ');
try{
    if(!EMAIL_REGEX_PATTERN.test(email)) throw "Invalid email"
        console.log("Valid email");
}catch(e){
    console.log(e);
}