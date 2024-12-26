function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        displayResult("Invalid input. Please enter numeric values.");
        return;
    }

    switch (operator) {
        case "+":
            displayResult(add(parsedNum1, parsedNum2));
            break;
        case "-":
            displayResult(subtract(parsedNum1, parsedNum2));
            break;
        case "*":
            displayResult(multiply(parsedNum1, parsedNum2));
            break;
        case "/":
            if (parsedNum2 == 0) {
                window.alert("Error: Division by zero.");
            } else {
                displayResult(divide(parsedNum1, parsedNum2));
            }
            break;
        default:
            displayResult("Invalid operator.");
    }
}

function add(a, b) {
    return (a + b).toFixed(2);
}

function subtract(a, b) {
    return (a - b).toFixed(2);
}

function multiply(a, b) {
    return (a * b).toFixed(2);
}

function divide(a, b) {
    return (a / b).toFixed(2);
}

function displayResult(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
}
