
// Define interfaces
interface MyInterface {
    property: string;
    method(): void;
}

// Define classes
class MyClass implements MyInterface {
    property: string;

    constructor(property: string) {
        this.property = property;
    }

    method(): void {
        console.log(this.property);
    }
}

// Define functions
function myFunction(param: string): void {
    console.log(param);
}

// Main execution
const myInstance = new MyClass('Hello, TypeScript!');
myInstance.method();
myFunction('This is a function call.');