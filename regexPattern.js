// Create a regex pattern to validate PIN code 400088.

const prompt = require('prompt-sync')();
const PINCODE_REGEX_PATTERN = RegExp("^[0-9]{6}$");
let str = prompt("Enter pincode: ");
try{
    if(!PINCODE_REGEX_PATTERN.test(str)) throw "Invalid pincode"
    {
        console.log("Valid pincode");
    }
}catch(e){
    console.log(e);
}