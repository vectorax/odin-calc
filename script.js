let displayValue ='';
let storedValue ='';

const keypad = document.querySelector('#buttonContainer');
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
    const display = document.getElementById('solutionBox');
    if(e.target !== e.currentTarget){
        let clickedButton = e.target.value;
        displayValue = displayValue.concat(clickedButton);
        display.innerText = displayValue;
    }
}

function storeOne(e){
    storedValue = displayValue;
    displayValue = '';
    console.log(e.target);

}