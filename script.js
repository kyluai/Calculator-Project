const display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function addToMemory() {
  memory += eval(display.value);
}

function recallMemory() {
  display.value += memory;
}

function clearMemory() {
  memory = 0;
}

function toggleSign() {
  display.value = -eval(display.value);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
