//Math operator functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    return operator(a, b)
}

let savedValue = null
let savedOperation = null
let displayValue = ""
const display = document.querySelector('.displayResult')
display.textContent = displayValue

//Adding event listeners to our number and operator buttons 

const zero = document.getElementById('0')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

const addBtn = document.getElementById('+')
const subtractBtn = document.getElementById('-')
const multiplyBtn = document.getElementById('x')
const divideBtn = document.getElementById('/')

const equalsBtn = document.getElementById('=')

const decimal = document.getElementById('.')

const clearBtn = document.getElementById('clear')


zero.addEventListener('click', function(e) {
    displayValue += "0"
    display.textContent = displayValue
})
one.addEventListener('click', function(e) {
    displayValue += "1"
    display.textContent = displayValue
})
two.addEventListener('click', function(e) {
    displayValue += "2"
    display.textContent = displayValue
})
three.addEventListener('click', function(e) {
    displayValue += "3"
    display.textContent = displayValue
})
four.addEventListener('click', function(e) {
    displayValue += "4"
    display.textContent = displayValue
})
five.addEventListener('click', function(e) {
    displayValue += "5"
    display.textContent = displayValue
})
six.addEventListener('click', function(e) {
    displayValue += "6"
    display.textContent = displayValue
})
seven.addEventListener('click', function(e) {
    displayValue += "7"
    display.textContent = displayValue
})
eight.addEventListener('click', function(e) {
    displayValue += "8"
    display.textContent = displayValue
})
nine.addEventListener('click', function(e) {
    displayValue += "9"
    display.textContent = displayValue
})

decimal.addEventListener('click', function(e) {
    if (!displayValue.includes('.')) {
        displayValue += "."
        display.textContent = displayValue
    }
})

clearBtn.addEventListener('click', function(e) {
    clear()
})

function clear() {
    displayValue = ""
    display.textContent = displayValue
    displayPrev.textContent = ""
    operationChar = ""
}

//operation buttons event listener
addBtn.addEventListener('click', function(e) {
    savedValue = parseFloat(displayValue)
    savedOperation = add
    clear()
})
subtractBtn.addEventListener('click', function(e) {
    savedValue = parseFloat(displayValue)
    savedOperation = subtract
    clear()
})
multiplyBtn.addEventListener('click', function(e) {
    savedValue = parseFloat(displayValue)
    savedOperation = multiply
    clear()
})
divideBtn.addEventListener('click', function(e) {
    savedValue = parseFloat(displayValue)
    savedOperation = divide
    clear()
})


equalsBtn.addEventListener('click', function(e) {
    if (parseFloat(displayValue) === 0 && savedOperation == divide) {
        display.textContent = "tsk tsk, you really thought you could get away with that?"
    } else {
        displayValue = operate(savedValue, parseFloat(displayValue), savedOperation)
        display.textContent = displayValue
    }
    savedValue = null
    savedOperation = null
    displayPrev.textContent = ""
})

//these will display the previous number and operation entered for a better user experience
const displayPrev = document.querySelector('.displayPrev')
let operationChar = ""


//display the saved value above the current value after any clicks if there are values to display
const wholePage = document.querySelector("*")
wholePage.addEventListener('click', function(e) {
    switch(savedOperation) {
        case add: operationChar = "+";
        break;
        case subtract: operationChar = "-"
        break;
        case multiply: operationChar = "x"
        break;
        case divide: operationChar = "/"
        break;
        default: null
    }
    if (!(savedValue === null || savedOperation === null)) {
        displayPrev.textContent = savedValue + " " + operationChar
    }
    
})