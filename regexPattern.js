const prompt = require('prompt-sync')();

const PINCODE_REGEX_PATTERN = RegExp("^[^a-zA-z][0-9]{6}$");
<<<<<<< HEAD
const EMAIL_REGEX_PATTERN = RegExp("^[a-zA-Z0-9]{3}$");
=======
const EMAIL_REGEX_PATTERN = RegExp("^[a-zA-Z0-9]+@$");

>>>>>>> UC2_Email
// UC1: Create a regex pattern to validate PIN code 400088.
// UC2: Create a regex pattern to validate PIN code A400088.
var pincode = parseInt(prompt("Enter pincode: "));
try{
    if(!PINCODE_REGEX_PATTERN.test(pincode)) throw "Invalid pincode"
        console.log("Valid pincode");
}catch(e){
    console.log(e);
}

//UC1: Validate Email address with a regex.
//UC2: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
var email = prompt('Enter Email Here: ');
try{
    if(!EMAIL_REGEX_PATTERN.test(email)) throw "Invalid email"
        console.log("Valid email");
}catch(e){
    console.log(e);
}