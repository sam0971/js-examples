// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.
const house = {
    windows: 10,
    doors: 2,
    interior: {
        rooms: 5
    }
};

// The below example with throw a TypeError. TypeError: Cannot read property 'chimney' of undefined. This is because the house object does not contain a roof property.
console.log(house.roof.chimney);

// We can do this with a if statement. But this will become unreadable with multiple deeper nested properties.
if (house.roof && house.roof.chimney) {
    console.log(house.root.chimney);
}

// Better way is to use ?.
console.log(house.roof?.chimney); // output: undefined
console.log(house.interior?.rooms); // output: 5
