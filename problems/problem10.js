let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['hello world', 'bye bye student', 'yoyo is a goog chile', 'i am a student now', 'coucou every body'];

let outputs = ['Hello World', 'Bye Bye Student', 'Yoyo Is A Goog Chile', 'I Am A Student Now', 'Coucou Every Body'];

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the words one by one
   - Use the toUpperCase string method
*/
function f(str) {
  const arr= str.split(' ');
  let taill=arr.length;
  let uppercases=[];
  for(let i=0; i<taill; i++)
  {
    const uppercase=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
  uppercases.push(uppercase);
  }
return uppercases.join(' ');
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

console.log('All tests passed for ' + __filename);
