// Define a TypeScript interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Create a function that takes a Person object and returns a greeting
function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}

// Create a Person object
const user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Call the greet function
console.log(greet(user));

// Define a type for a function that takes a Person object and returns a string
type GreetFunction = (person: Person) => string;

// Assign the greet function to a variable of type GreetFunction
const greetFunction: GreetFunction = greet;

// Call the greet function using the variable
console.log(greetFunction(user));