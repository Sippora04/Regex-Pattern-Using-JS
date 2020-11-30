const prompt = require('prompt-sync')();

const PINCODE_REGEX_PATTERN = RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
const EMAIL_REGEX_PATTERN = RegExp('[a-zA-Z0-9]+([._+-][0-9a-zA-Z])*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

// UC1: Create a regex pattern to validate PIN code 400088.
// UC2: Create a regex pattern to validate PIN code A400088.
// UC3: Create a regex pattern to validate PIN code 400088B.
// UC4: Make sure 400 088 is also valid along with 400088.
var pinCode = prompt("Enter pincode: ");
try{
    if(!PINCODE_REGEX_PATTERN.test(pinCode)) throw "Invalid pincode"
        console.log("Valid pincode");
}catch(e){
    console.log(e);
}

// UC1: Validate Email address with a regex.
// UC2: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
// UC3: Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
// UC4: Lets handle optional part i.e. xyz in abc.xyz@bridgelabz.co.in
var email = prompt('Enter Email Id: ');
try{
    if(!EMAIL_REGEX_PATTERN.test(email)) throw "Invalid email"
        console.log("Valid email");
}catch(e){
    console.log(e);
}