const display = document.getElementById("display");

const clear = document.getElementById("clearBtn");
const parentheses = document.getElementById("parenthesesBtn");
const percent = document.getElementById("percentBtn");
const division = document.getElementById("divisionBtn");

const seven = document.getElementById("sevenBtn");
const eight = document.getElementById("eightBtn");
const nine = document.getElementById("nineBtn");
const multiplication = document.getElementById("multiplicationBtn");

const four = document.getElementById("fourBtn");
const five = document.getElementById("fiveBtn");
const six = document.getElementById("sixBtn");
const subtraction = document.getElementById("subtractionBtn");

const one = document.getElementById("oneBtn");
const two = document.getElementById("twoBtn");
const three = document.getElementById("threeBtn");
const addition = document.getElementById("additionBtn");

const plusMinus = document.getElementById("plusMinusBtn");
const zero = document.getElementById("zeroBtn");
const dot = document.getElementById("dotBtn");
const equals = document.getElementById("equalsBtn");

one.addEventListener('click', () => {
   display.textContent += "1"; 
});