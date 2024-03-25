// Define an object using object shorthand notation with property initializers
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Destructure the 'person' object to extract 'name' and 'age' properties
const { name, age } = person;

// Define an array using spread operator for concise array creation
const numbers = [1, 2, 3, 4, 5];

// Use array destructuring to extract individual values from the 'numbers' array
const [first, second, ...rest] = numbers;

// Use template literals for string interpolation, allowing dynamic values and expressions
const greeting = `Hello, ${name}! You are ${age} years old.`;

// Use arrow functions for concise and clear function syntax, with implicit return
const add = (a, b) => a + b;

// Use the 'map' method with arrow function for concise iteration and transformation of arrays
const doubledNumbers = numbers.map(num => num * 2);

// Use object destructuring with nested objects to extract nested properties
const { address: { city, country } } = person;

// Use default parameter values for function parameters to provide fallback values
const greet = (name = 'Guest') => `Hello, ${name}!`;

// Use the 'find' method with arrow function for searching elements in arrays
const foundNumber = numbers.find(num => num === 3);

// Use optional chaining to safely access nested properties without causing errors
const street = person.address?.street;

// Use 'BigInt' data type for handling large integers beyond the limits of regular numbers
const bigIntNumber = 9007199254740991n + 1n;

// Use 'Promise.allSettled' for handling multiple promises concurrently and handle all results
const promises = [Promise.resolve(1), Promise.reject('Error'), Promise.resolve(3)];
Promise.allSettled(promises)
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(`Value: ${result.value}`);
            } else {
                console.error(`Reason: ${result.reason}`);
            }
        });
    });

// Use 'nullish coalescing operator' to provide a default value for null or undefined values
const defaultValue = undefined ?? 'Default Value';

// Use 'optional chaining' and 'nullish coalescing operator' together for safe property access
const streetName = person.address?.street ?? 'Unknown Street';

// Log outputs to the console for demonstration
console.log(greeting);
console.log(add(2, 3));
console.log(doubledNumbers);
console.log(`City: ${city}, Country: ${country}`);
console.log(greet('Alice'));
console.log(foundNumber);
console.log(`Street: ${street}`);
console.log(bigIntNumber);
console.log(defaultValue);
console.log(streetName);
