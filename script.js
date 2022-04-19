let displayValue ='';
let storedValue ='';
let operator = '';
let solution = '';

const keypad = document.querySelector('#buttonContainer');
const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');

keypad.addEventListener('click',fillDisplay,false);

 function add(a, b){
    return a + b
 }

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
} 



function input(){
    let inputArea = document.getElementById("solutionArea");
    inputArea.innerText()
}

function fillDisplay(e){
    
    if(e.target !== e.currentTarget && e.target.className == 'numberButton'){
        let clickedButton = e.target.value;
        displayValue = displayValue.concat(clickedButton);
        display.innerText = displayValue;
    }
}

function storeOne(e){
    storedValue = displayValue;
    displayValue = '';
    operator = e.target.value;
    display.innerText = displayValue;
    subDisplay.innerText = storedValue;
}

function operate(){
    let a = storedValue;
    let b = displayValue;
    console.log(storedValue);
    console.log(b);
    if(operator == add){
        solution = add(a,b)
    }
    else if(operator == subtract){
        solution = subtract(a,b)
    }
    else if(operator == multiply){
        solution = multiply(a,b)
    }
    else {solution = divide(a,b)}
    display.innerText = solution;
}