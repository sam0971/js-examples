// I use this when I want to have a fallback value for a variable.
const obj1 = null
const obj2 = false
const obj3 = {name: 'Sam'};

const output = obj1 || obj2 || obj3 || {name: 'Fallback'};

console.log(output);
// Output:
// { name: 'Sam' }
