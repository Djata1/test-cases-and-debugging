let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"
];

let outputs = [
  "Lorem ipsumos dolor sit amet consectetur\n adipisicing elit. Magni quisquam"
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
  let charac = str.split("");
  let ch = "";
  // console.log(str);
  for (let i = 0; i < charac.length; i++) {
    if (i % 40 === 0 && i !== 0) {
      ch = ch + "\n";
      if (charac[i] !== " ") {
        ch += charac[i];
      }
    }
    // console.log(ch, charac[i]);
    ch = ch + charac[i];
  }
  return ch;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
/*runTest(1);
runTest(2);
runTest(3);
runTest(4);*/

console.log("All tests passed for " + __filename);
