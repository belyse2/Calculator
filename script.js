// Function to add
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide
  function divide(a, b) {
    if (b === 0) {
      displayError("Cannot divide by zero!");
      return;
    }
    return a / b;
  }
  
  // Function to display an error message
  function displayError(message) {
    const displayElement = document.querySelector(".display");
    displayElement.textContent = message;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const displayElement = document.querySelector(".display");
    displayElement.textContent = "0";
  }
  
  // Function to update the display with a value
  function updateDisplay(value) {
    const displayElement = document.querySelector(".display");
    displayElement.textContent = value;
  }
  
  // Function to operate on the numbers using the chosen operator
  function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        return NaN;
    }
  }
  
  // Function to handle number button clicks
  function handleNumberClick(event) {
    const displayElement = document.querySelector(".display");
    const currentValue = displayElement.textContent;
  
    // Avoid leading zeros
    if (currentValue === "0") {
      updateDisplay(event.target.textContent);
    } else {
      updateDisplay(currentValue + event.target.textContent);
    }
  }
  
  // Function to handle operator button clicks
  function handleOperatorClick(event) {
    const displayElement = document.querySelector(".display");
    const currentValue = displayElement.textContent;
    const operator = event.target.textContent;
  
    if (currentValue !== "0") {
      // Save the first number and the operator
      firstNumber = currentValue;
      selectedOperator = operator;
      updateDisplay("0");
    }
  }
  
  // Function to handle the equals button click
  function handleEqualsClick() {
    const displayElement = document.querySelector(".display");
    const currentValue = displayElement.textContent;
    const result = operate(selectedOperator, firstNumber, currentValue);
    
    // Round the result to avoid long decimals
    const roundedResult = Math.round(result * 1000) / 1000;
    updateDisplay(roundedResult);
  
    // Reset the stored data
    firstNumber = "0";
    selectedOperator = null;
  }
  
  // Function to handle the clear button click
  function handleClearClick() {
    clearDisplay();
    firstNumber = "0";
    selectedOperator = null;
  }
  
  // Function to handle the backspace button click
  function handleBackspaceClick() {
    const displayElement = document.querySelector(".display");
    const currentValue = displayElement.textContent;
  
    if (currentValue.length > 1) {
      // Remove the last character from the display
      const newValue = currentValue.slice(0, -1);
      updateDisplay(newValue);
    } else {
      // If the display contains only one character, set it to "0"
      updateDisplay("0");
    }
  }
  
  // Add event listeners to the number buttons
  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberClick);
  });
  
  // Add event listeners to the operator buttons
  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", handleOperatorClick);
  });
  
  // Add event listener to the equals button
  const equalsButton = document.querySelector(".equals");
  equalsButton.addEventListener("click", handleEqualsClick);
  
  // Add event listener to the clear button
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", handleClearClick);
  
  // Add event listener to the backspace button
  const backspaceButton = document.querySelector(".backspace");
  backspaceButton.addEventListener("click", handleBackspaceClick);
  
  // Variables to store the data
  let firstNumber = "0";
  let selectedOperator = null;
  