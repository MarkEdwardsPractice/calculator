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

zero.addEventListener('click', () => {
   display.textContent += "0";
});

one.addEventListener('click', () => {
   display.textContent += "1"; 
});

two.addEventListener('click', () => {
   display.textContent += "2"; 
});

three.addEventListener('click', () => {
   display.textContent += "3"; 
});

four.addEventListener('click', () => {
   display.textContent += "4"; 
});

five.addEventListener('click', () => {
   display.textContent += "5"; 
});

six.addEventListener('click', () => {
   display.textContent += "6"; 
});

seven.addEventListener('click', () => {
   display.textContent += "7"; 
});

eight.addEventListener('click', () => {
   display.textContent += "8"; 
});

nine.addEventListener('click', () => {
   display.textContent += "9"; 
});

division.addEventListener('click', () => {
   display.textContent += "/"; 
});

multiplication.addEventListener('click', () => {
   display.textContent += "x"; 
});

subtraction.addEventListener('click', () => {
   display.textContent += "-"; 
});

addition.addEventListener('click', () => {
   display.textContent += "+"; 
});

clear.addEventListener('click', () => {
   display.textContent = ""; 
});

parentheses.addEventListener('click', () => {
   let afterOperator = false;
   const operatorArray = ["+", "-", "/", "x"];
   for(let i = 0; i < 4; i++)
   {
      console.log(display.textContent[display.textContent.length - 1])
      if(display.textContent[display.textContent.length - 1] === operatorArray[i])
      {
         afterOperator = true;
      }
   }
   if(display.textContent === "" || afterOperator)
   {
      display.textContent += "(";
   }
   else
   {
      display.textContent += ")";
   }
});

percent.addEventListener('click', () => {
   let percentage = Number(display.textContent) / 100;
   console.log(percentage);
   display.textContent = percentage;
});

plusMinus.addEventListener('click', () => {
      let array = [...display.textContent];
      if(array[0] !== "+" && array[0] !== "-")
      {
         display.textContent += "+";
      }
});

dot.addEventListener('click', () => {
   display.textContent += ".";
});