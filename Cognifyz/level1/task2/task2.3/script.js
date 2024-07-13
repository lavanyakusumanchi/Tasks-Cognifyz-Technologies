document.getElementById('calculatorForm').addEventListener('submit', function(event) {
event.preventDefault();
let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);
let result = num1 + num2;
document.getElementById('result').innerText = `Result: ${result}`;
});