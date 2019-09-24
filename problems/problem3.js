let verifyEquals = require('./verify-equals.js');

// we need 7 test cases. I've provided 2.
let inputs = [[2, 4], [-3, 3], [6, 2], [8, 5], [4, 9], [9, 5], [1, 3]];

let outputs = [6, 0, 8, 13, 13, 14, 4];

/*
  This function expects an array of 2 numbers as input (e.g. [1,2])
  Make this function return the sum of the two numbers that are passed to it.
  If anything other than an array with 2 numbers is passed, return undefined.
  You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')
*/
function f(input) {
  
 if(input.length !== 2||input.some((elem)=>typeof elem !=='number'))
 {
return undefined
 }
 return (input.reduce((a,b)=>{return a+b}));
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
