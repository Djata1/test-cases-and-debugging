let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['All computer programs written in every programming language[1] follow the same basic structure. Programs are made of statements, statements contain expressions and '];

let outputs = [All computer programs written in every program
ming language[1] follow the same basic structure. Pr
];

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
function f(str) {
charac=str.split('');
for(let i=0; i < charac.length; i++)
{let ch='';
  if(i%40===0)
  {
ch=ch+'/n';
  }
  ch+charac[i];
}
return ch;

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
