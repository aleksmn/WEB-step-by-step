'use strict';

///// Для чего нужен 'use strict'

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // делаем ошибку в названии переменной

if(hasDriversLicense) console.log('Можно за руль.');  // ReferenceError при 'use strict'

let interface; // SyntaxError: Unexpected strict mode reserved word
let private; // SyntaxError: Unexpected strict mode reserved word



//////  Функции  ///////