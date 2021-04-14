sleep.js: 
Example of a sleep function in js (for async functions)

IIFE:
Sometimes you see online the term IIFE. This example shows what it is.
 - Immediately invoked function expression. Execute a function directly.

Optional chaining:
 - // The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.
 - object.property?.property

logical OR (||)
 - expr1 || expr2

const vs let:
When searching online, you see a lot of wrong usage of let and const variables (mostly with objects). A lot of people do let myObject = {}. As long as they do not replace the whole object, const is better. The file also contains other examples.

promises:
A small example of how to write promises.

promises orders folder:
Contains 3 cases of how the execution order is of the promises. You can test them by yourself by using "node case1.js" for example.
 - case 1: Example of promises that wait for each other
 - case 2: Execute all promises at once
 - case 3: Use promise.all to wait for all promises to resolve, before continuing. 

await:
Example of async / await with the promises as example.

