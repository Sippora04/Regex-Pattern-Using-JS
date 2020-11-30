const prompt = require('prompt-sync')();

const PINCODE_REGEX_PATTERN = RegExp("^[0-9]{6}[^a-zA-z@]$");
const EMAIL_REGEX_PATTERN = RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$");

// UC1: Create a regex pattern to validate PIN code 400088.
// UC2: Create a regex pattern to validate PIN code A400088.
// UC3: Create a regex pattern to validate PIN code 400088B.
var pincode = prompt("Enter pincode: ");
try{
    if(!PINCODE_REGEX_PATTERN.test(pincode)) throw "Invalid pincode"
        console.log("Valid pincode");
}catch(e){
    console.log(e);
}

//UC1: Validate Email address with a regex.
//UC2: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
//UC3: Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
var email = prompt('Enter Email Here: ');
try{
    if(!EMAIL_REGEX_PATTERN.test(email)) throw "Invalid email"
        console.log("Valid email");
}catch(e){
    console.log(e);
}