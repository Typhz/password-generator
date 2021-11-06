const LETTERS_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz"
const NUMBERS = "0123456789"
const SYMBOLS = "!@#$%¨&*()-_+"
let NUMBER_CHECKBOX = document.querySelector("#numbers")  
let UPPER_CHECKBOX = document.querySelector("#upper_case")  
let LOWER_CHECKBOX = document.querySelector("#lower_case")  
let SYMBOLS_CHECKBOX = document.querySelector("#symbols")
let BUTTON_GEN = document.querySelector("#generator")
function generatePassword(length, upper, lower, numbers, symbols) {
    var password = "";
    var characters = "";
    if (upper) {
        characters += LETTERS_UPPER;
    }
    if (lower) {
        characters += LETTERS_LOWER;
    }
    if (numbers) {
        characters += NUMBERS;
    }
    if (symbols) {
        characters += SYMBOLS;
    }
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
}


function clip(text) {
    navigator.clipboard.writeText(text);
}
function displayPassword(){
    let isNumberChecked = NUMBER_CHECKBOX.checked
    let isUpperChecked = UPPER_CHECKBOX.checked
    let isLowerChecked = LOWER_CHECKBOX.checked
    let isSymbolsChecked = SYMBOLS_CHECKBOX.checked
    let passwordBox = document.querySelector("#password")
    tempPassword = generatePassword(8, isUpperChecked, isLowerChecked,isNumberChecked,isSymbolsChecked)
    passwordBox.innerHTML = tempPassword
}

BUTTON_GEN.addEventListener("click", displayPassword)   