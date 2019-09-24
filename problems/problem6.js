// pro tip: use nodemon instead of node
let verifyEquals = require('./verify-equals.js');

// we need 6 test cases.
let inputs = [['add', 10, 20], ['chair', 20, 10], ['sub', 50, 20], ['mult', 2, 20], ['div', 10, 20], ['spoof', 10, 20],];

let outputs = [30, undefined, 30, 40, undefined, undefined];

/*
The function takes an array. The array has 3 elements. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined
*/
function f(arr) {
  const si=arr[0];
  switch(si){
    case 'add':
     return arr.slice(1).reduce((a, b)=>{return a+b;});
     case 'sub':
       return arr.slice(1).reduce((a, b)=>{return a-b;})
    case 'mult':
      return arr.slice(1).reduce((a, b)=>{return a*b;})
    default:
    return undefined;
  }

  
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
console.log('All tests passed for ' + __filename);
