#!/usr/bin/env node
// The above line is a "shebang" https://en.wikipedia.org/wiki/Shebang_(Unix)
// It tells operating system that this file is an executable and
// should be interpreted and run as a nodeJS file. This allows you to run
// this script by simply calling "$ fibonacci.js" (instead of "$ node fibonacci.js")
// but make sure you change the access permission of the file using chmod http://oliverelliott.org/article/computing/ref_unix/#chmod

let number = process.argv[2];

if (number) {
  let pastOne = 1;
  let pastTwo = 0;
  let newSequence = 1;
  while (number > 0) {
    number -= 1;
    console.log(newSequence);
    newSequence = pastOne + pastTwo;
    pastTwo = pastOne;
    pastOne = newSequence;
  }
} else {
  console.log('A number argument is required');
}
