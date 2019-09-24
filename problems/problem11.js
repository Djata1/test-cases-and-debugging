let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [5, 8, 'dd','nt',''];

let outputs = [13];

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
  
  if(arr.length === 0) return 0;
  return arr.reduce((acc,val) => (typeof val === 'number' ? acc + val : acc),0);
}
  /*let som=0;
  for(let i=0; i<arr.length; i++)
  {
    if(typeof arr[i]==='number')
som=som+arr[i];
console.log(som);
  }
 // console.log(som);
  return som;*/
  

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

console.log('All tests passed for ' + __filename);
