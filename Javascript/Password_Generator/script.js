const rangeCharacters = document.getElementById('range-char');

const numberCharacters = document.getElementById('number-char');

const formContainer = document.querySelector("#password-form");

const numbersEl = document.querySelector("#numbers");

const symbolsEl = document.querySelector("#symbols");

const upperCaseEl = document.querySelector("#uppercase");

const passwordDisplay = document.querySelector("#password-display");


const lowercaseCharCodes = arrayLowToHigh(97, 122);

const numberCharCodes = arrayLowToHigh(48, 57);

const symbolCharCodes = arrayLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);

const uppercaseCharCodes = arrayLowToHigh(65, 90);



//Synchronizing Range and Number Inputs

rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input",syncCharAmount);

//Synchronizing Range and Number Function
function syncCharAmount(e) {

    //console.log(e.target.value);

    const valueAmount = e.target.value;

    rangeCharacters.value = valueAmount;
    numberCharacters.value = valueAmount;

}


//Generating the password when the form is submitted
formContainer.addEventListener("submit", function (e) {
   
    e.preventDefault();

    const characterAmount = numberCharacters.value;
    
    const includeNumbers = numbersEl.checked;
    
    const includeSymbols = symbolsEl.checked;
    
    const includeUpperCase = upperCaseEl.checked;
    
    const password = generatePassword(characterAmount, includeNumbers, includeSymbols, includeUpperCase);
    
    passwordDisplay.innerText=password;

});

//generatePassword function 
function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUpperCase) {

   // console.log(lowercaseCharCodes);

  //  console.log(numberCharCodes);

   // console.log(symbolCharCodes);

   // console.log(uppercaseCharCodes);
    
    let charCodes = lowercaseCharCodes;

    if (includeNumbers) {
        
        charCodes=charCodes.concat(numberCharCodes);
    }
    if (includeSymbols) {
        
        charCodes = charCodes.concat(symbolCharCodes);
    }

    if (includeUpperCase) {
        
        charCodes = charCodes.concat(uppercaseCharCodes);
    }

    const passwordCharacters = [];

    for (let x = 0; x < characterAmount; x++)
    {
        let characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)];

        passwordCharacters.push(String.fromCharCode(characterCodes));
    }

    return passwordCharacters.join("");

}

//Charcater Codes Looping Function

function arrayLowToHigh(low, high)
{
    let array = [];

    for (let i = low; i <= high; i++)
    {
        array.push(i);
    }

    return array;
}


