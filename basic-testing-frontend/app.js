import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  console.log('numberValues', numberValues)
  const result = calculateResult(numberValues);
  console.log('result', result)
  const resultText = generateResultText(result);
  console.log('resultText', resultText)

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);