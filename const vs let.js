// Define variables with const or let, avoid using var.
// Variables defined with const or let are only available within the code block, not global.

// Difference const vs let

// Use const when the value never changes
const machineName = "Sam"

// Use let when the value can change later in code
let userName = "Anonymous";

if ('user logged in') {
    userName = 'Sam';
}

// Use const when updating properties to an object / updating arrays.
const myObj = {};
myObj.name = 'Object name';
myObj.type = 'Object type';

const myArray = [];
myArray.push('Sam');
myArray.push('value');

if ('something changed') {
    myObj.name = 'New object name';
    myArray[0] = 'New name';
}

console.log('machineName', machineName);
console.log('userName', userName);
console.log('myObj', myObj);
console.log('myArray', myArray);


