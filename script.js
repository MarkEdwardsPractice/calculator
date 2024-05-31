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

let equalsPressed = false;

function clearDisplay()
{
   display.textContent = "";
}


zero.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "0";
});

one.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "1"; 
});

two.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "2"; 
});

three.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "3"; 
});

four.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "4"; 
});

five.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "5"; 
});

six.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "6"; 
});

seven.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "7"; 
});

eight.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "8"; 
});

nine.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
   display.textContent += "9"; 
});

division.addEventListener('click', () => {
   if(equalsPressed)
   {
      clearDisplay();
      equalsPressed = false;
   }
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

function operate(operator, operand1, operand2)
{
   operand1 = Number(operand1);
   operand2 = Number(operand2);
   switch(operator)
   {
      case "+":
         return operand1 + operand2;
      break;
      case "-":
         return operand1 - operand2;
      break;
      case "x":
         return operand1 * operand2;
      break;
      case "/":
         return operand1 / operand2;
      break;
      default:
         return "Error";
   }
}

equals.addEventListener('click', () => {
   const array = [...display.textContent];
   let opIndex = 0;
   let operatorInput = "";
   if(array.indexOf("+") !== -1)
   {
      opIndex = array.indexOf("+");
      operatorInput = "+";
   }
   else if(array.indexOf("-") !== -1)
   {
      opIndex = array.indexOf("-");
      operatorInput = "-";
   }
   else if(array.indexOf("x") !== -1)
   {
      opIndex = array.indexOf("x");
      operatorInput = "x";
   }
   else if(array.indexOf("/") !== -1)
   {
      opIndex = array.indexOf("/");
      operatorInput = "/";
   }
   else
   {
      opIndex = 0;
      operatorInput = "None";
   }
   const op1 = array.slice(0, opIndex).join("");
   const op2 = array.slice(opIndex + 1).join("");
   display.textContent = operate(operatorInput, op1, op2);
   equalsPressed = true;
});