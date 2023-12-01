import { add, subtract } from './math_functions.js';

// alert(add(4, 5))

document.getElementById('app').innerText = add(123, 234)
document.getElementById('app').innerText += '\n' + subtract(40, 15)