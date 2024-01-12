document.addEventListener('DOMContentLoaded', function () {
  var op1Input = document.getElementById('op1');
  var op2Input = document.getElementById('op2');
  var resultDisplay = document.getElementById('res');

  var addButton = document.getElementById('add-button');
  var subButton = document.getElementById('sub-button');
  var mulButton = document.getElementById('mul-button');
  var divButton = document.getElementById('div-button');
  var logButton = document.getElementById('log-button');
  var sinButton = document.getElementById('sin-button');
  var tanButton = document.getElementById('tan-button');

  addButton.addEventListener('click', function () {
    calculate('add');
  });

  subButton.addEventListener('click', function () {
    calculate('sub');
  });

  mulButton.addEventListener('click', function () {
    calculate('mul');
  });

  divButton.addEventListener('click', function () {
    calculate('div');
  });

  logButton.addEventListener('click', function () {
    calculate('log');
  });

  sinButton.addEventListener('click', function () {
    calculate('sin');
  });

  tanButton.addEventListener('click', function () {
    calculate('tan');
  });

  function calculate(operation) {
    var operand1 = parseFloat(op1Input.value);
    var operand2 = parseFloat(op2Input.value);

    if (isNaN(operand1) || isNaN(operand2)) {
      resultDisplay.textContent = 'Invalid input';
      return;
    }

    var result;

    switch (operation) {
      case 'add':
        result = operand1 + operand2;
        break;
      case 'sub':
        result = operand1 - operand2;
        break;
      case 'mul':
        result = operand1 * operand2;
        break;
      case 'div':
        if (operand2 !== 0) {
          result = operand1 / operand2;
        } else {
          result = 'Division by zero';
        }
        break;
      case 'log':
        result = Math.log(operand1);
        break;
      case 'sin':
        result = Math.sin(operand1);
        break;
      case 'tan':
        result = Math.tan(operand1);
        break;
      default:
        result = 'Invalid operation';
    }

    resultDisplay.textContent = 'Result: ' + result;
