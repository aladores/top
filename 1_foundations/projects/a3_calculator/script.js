
//Main buttons
const buttonMain = document.querySelectorAll('.button-main');

//Display
const display = document.getElementById('display-main');
const displayTop = document.getElementById('display-top');
const buttonClear = document.getElementById('clear');
const buttonBackSpace = document.getElementById('backspace');

//Operator buttons
const buttonOperator = document.querySelectorAll('.button-operator');
const buttonEqual = document.getElementById('operator-equal');

let firstValue = "";
let secondValue = "";
let currentOperator = "";

//*********Display Functions***********//
function getDisplayMain() {
    return display.innerText;
}
function updateDisplayMain(value) {

    if (getDisplayMain() == '0') {
        display.innerText = "";
    }
    //Check if dot is already entered 
    if (value == '.' && (getDisplayMain().includes('.'))) {
        console.log(". already inserted");
        return;
    }
    display.append(value);
}

function updateDisplayTop(event) {
    if (event == "evaluate") {
        displayTop.textContent = `${firstValue} ${currentOperator} ${secondValue} =`
    }
    else if (event == "operation") {
        displayTop.textContent = `${firstValue} ${currentOperator}`
    }
}

function clearDisplayAll() {
    display.innerText = 0;
    displayTop.innerText = "";
    firstValue = 0;
    secondValue = 0;
    currentOperator = "";
}

function clearDisplayMain() {
    display.innerText = 0;
}

function backSpace() {
    let displayValue = getDisplayMain();

    if (displayValue == "0") {
        return;
    }

    display.innerText = displayValue.substring(0, displayValue.length - 1);

    if (display.innerText == "") {
        clearDisplayMain();
    }
}

//*********Operator Functions***********//
function setOperator(operator) {

    let selectedOperator = operator;
    //Error: User selects = before entering two numbers
    if (selectedOperator == '=' && (firstValue == 0 && secondValue == 0)) {
        return;
    }

    if (selectedOperator != '=') {
        evaluate()
    }
    firstValue = getDisplayMain();
    currentOperator = selectedOperator;
    updateDisplayTop("operation");
    clearDisplayMain();
}

function evaluate() {
    if (currentOperator == "") {
        return;
    }
    let result = 0;
    secondValue = getDisplayMain();
    result = roundResult(performMath(firstValue, secondValue, currentOperator));
    console.log(firstValue, secondValue, currentOperator);
    clearDisplayMain();
    updateDisplayMain(result);
    updateDisplayTop("evaluate");
    currentOperator = "";
}

function performMath(a, b, operator) {
    let result = 0;
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}
function roundResult(value) {
    return Math.round(value * 1000) / 1000
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//*********Keyboard Functions***********//
function handleKeyboardInput(e) {
    if ((e.key >= 0 && e.key <= 9) || (e.key === '.')) {
        updateDisplayMain(e.key);
    }
    if ((e.key == '=') || (e.key == 'Enter')) {
        evaluate()
    }
    if (e.key == 'Backspace') {
        backSpace()
    }
    if (e.key == 'Delete') {
        clearDisplayAll()
    }
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        setOperator(convertOperator(e.key))
    }
}

function setupListeners() {
    buttonMain.forEach((element) =>
        element.addEventListener('click', () => updateDisplayMain(element.textContent))
    );
    buttonOperator.forEach((element) =>
        element.addEventListener('click', () => setOperator(element.textContent))
    );
    window.addEventListener('keydown', handleKeyboardInput)
    buttonClear.addEventListener('click', clearDisplayAll);
    buttonBackSpace.addEventListener('click', backSpace)
    buttonEqual.addEventListener('click', evaluate);
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === 'x') return '×'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
}

function init() {
    setupListeners();
}
init();