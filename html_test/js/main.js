const fibonacci = Module.cwrap('fibonacci', 'number', ['number']);
const runButton = document.getElementById('run');
const numInput = document.getElementById('num-input');
const resultElem = document.getElementById('result');

runButton.addEventListener('click', () => {
  var n = parseInt(numInput.value, 10);
  var result = fibonacci(n);
  resultElem.innerText = result;
});
