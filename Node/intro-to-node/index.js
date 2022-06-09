// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");

// // Docs:
// // https://nodejs.org/api/fs.html

// // Initialize NPM with 'npm init' command

// // Install 'npm i superheroes'

// // https://www.npmjs.com/package/superheroes

const superheroes = require("superheroes");

const supervillains = require("supervillains");

let mySuperhero = superheroes.random();

let mySupervillain = supervillains.random();

// console.log(mySuperhero);

// console.log(mySupervillain);

console.log(`The new movie is "${mySuperhero} vs. ${mySupervillain}"!`);
