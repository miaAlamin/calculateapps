

function getAllButtonId(id) {
    const allbtn = document.getElementById(id);
    return allbtn;
}

function getAllInputValueId(id){
    const allInputvalue = document.getElementById(id).value;
    return allInputvalue;

}



// const incomefild = getAllInputValueId('incomefild');
// const incomefild = getAllInputValueId('incomefild');

const Softwarefild = getAllInputValueId('Softwarefild');
const Coursefild =getAllInputValueId('Coursefild');
const Internetfild = getAllInputValueId('Internetfild');
const savingsfild = getAllInputValueId('savingsfild');

const assistantBtn = getAllButtonId('Assistant-btn');
const historyBtn = getAllButtonId('History-btn');
const calculateBtn = getAllButtonId('calculate-btn');
const calculateSavingsBtn = getAllButtonId('calculate-svaings-btn');


var incomeField = document.getElementById('incomefild');
            
            // Retrieve the value of the input field
            var incomeValue = incomeField.value;

calculateBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log( incomeValue)
})