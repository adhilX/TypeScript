// What is TypeScript ? 

// ✔️ TypeScript is a strongly typed superset of JavaScript.
// ✔️ It compiles to plain JavaScript, making it compatible with browsers and Node.js.
// ✔️ It adds static typing, interfaces, classes, and modern JS features.


//  Why Use TypeScript?

// ✔️ Static Typing – Detects errors during development.
// ✔️ Better Code Maintainability – Improves code structure and readability.
// ✔️ OOP Support – Provides classes, inheritance, and interfaces.
// ✔️ Modern JavaScript Features – Supports ES6+ features.
// ✔️ Better Developer Experience – Works well with IDEs like VS Code.


//  How TypeScript Works?

// 1️⃣ Write TypeScript Code → .ts file
// 2️⃣ Compile to JavaScript → .js file using tsc
// 3️⃣ Run in Browser or Node.js

//  Key Features of TypeScript

// ✔️ Type Annotations – Define variable types (string, number, boolean, etc.).
// ✔️ Interfaces – Define object structures.
// ✔️ Classes & OOP – Supports inheritance and polymorphism.
// ✔️ Generics – Allows reusable components.
// ✔️ Enums – Define named constants.
// ✔️ Modules – Organize and reuse code efficiently.
// ✔️ Optional Parameters – Allows flexible function arguments.



//   TypeScript vs JavaScript

// Feature      	    TypeScript ✅	      JavaScript ❌
//------------------------------------------------------------
// Static Typing	    ✅ Yes	             ❌ No
// Interfaces   	    ✅ Yes	             ❌ No
// Class-based OOP  	✅ Yes	             ❌ No
// Code Maintainability	✅ Better	         ❌ Limited
// Error Detection	    ✅ Before Execution	 ❌ Runtime



//=================================================================================



// // infer types (implicit typing) in TypeScript
// //--------------------------------------------

// // TypeScript figures out the type of a variable from the value assigned to it.


// let userName = 'Adhil'
// let age = 18 
//   age = '18' // Error: Type 'string' is not assignable to type 'number'.

// // In the above example, we defined a variable named age and assigned the value 18 to it.

// // TypeScript inferred the type of the age variable as number based on the initial value of 18. 
// // When we try to assign a string value to the age variable, TypeScript throws an error because the type of the age variable is number



// // Defing types (explicit typing) in TypeScript
// //--------------------------------------------

// // You can explicitly define the type of a variable using a colon (:) followed by the type.
// // This is known as explicit typing.

// let userName:string  = 'Adhil' // we deleted the type of the variable as string
// let age:number = 18
// let isStudent:boolean = true
// let hobbies:string[] = ['Reading', 'Coding', 'Traveling']  // Array of strings

// let count:[] = [1, 2, 3, 4, 5]   // Error: it is empty array so it is not able to insert number values ,the array is always empty
// let count :number[] = [1, 2, 3, 4, 5] // Correct

// let userDetails :{name : string, age : number, isStudent : boolean} = { 

// // Here we are defining the type of the object , in this type of defining we must use all the properties of the object , else it will throw an error

//   name : 'Adhil', // Here we could not assing any other type of value to the name property , only string is allowed
//   age : 18,
//     isStudent : true ,
// Salary : 10000 // Error: we dont have the property named "Salary" in the type of the object , so it will throw an error
// }

// userDetails.age = '18' // Error: here we are trying to assign a string value to the age property , but the type of the age property is number


 // Basic types in TypeScript
//--------------------------------------------

// TypeScript provides several basic types that you can use to define variables.
// Here are some of the basic types in TypeScript:

// 1️⃣ String (string)
// Represents a sequence of characters (text).

// 2️⃣ Number (number)
// Represents both integers and floating-point numbers.

// 3️⃣ Boolean (boolean)
// Represents true or false.

// 4️⃣ Array (Array<T> or T[])
// Represents a list of elements of the same type.

// 5️⃣ Tuple ([T1, T2, ...])
// Represents a fixed-length array where elements can have different types.

// 6️⃣ Enum (enum)
// Represents a set of named constants.

// 7️⃣ Any (any)
// Allows a variable to hold any type of value. (Not type-safe, avoid if possible.)

// 8️⃣ Void (void)
// Used when a function does not return a value.

// 9️⃣ Null (null)
// Represents an intentional absence of a value.

// 🔟 Undefined (undefined)
// Represents a variable that has been declared but not assigned a value.

// 1️⃣1️⃣ Never (never)
// Represents functions that never return a value (e.g., errors or infinite loops).



//  // Define a TypeScript interface
//  //--------------------------------------------

// // An interface is a TypeScript feature that defines the shape of an object.
// // syntax given below

// interface Details {
//    name : string,
//     age : number,
//     isStudent : boolean
// }

// let userDetails :Details = {
//     name : 'Adhil',
//    // if if dont add age property it will throw an error,because we are defining the type of the object
//     age : 18,
//     isStudent : true
// }




// // Defining a type
// //--------------------------------------------

// // TypeScript also allows you to define custom types using the type keyword.
// // The syntax for defining a type is similar to that of defining an interface, but with a few differences.
// // Here's an example:
// type Details = {
//     name : string,
//     age : number,
//     isStudent : boolean
//     getName?:() => string // optional property
//     // getName is an optional property that is a function returning a string.
// }
// let skills :( string| number) [] = ['Reading', 'Coding', 'Traveling',3 ,3, 5] // Array of strings and numbers using union operator "|"

// // union operator "|" is used to define the multiple types of the array


// function getUserName({name , age}:{name :string ; age:number}) :string{
//  return name
// }

// getUserName({name : 'Adhil' ,age: 23}) // here we are passing the object with the properties name and age , so we are defining the type of the object in the function itself



// // Void type
// //--------------------------------------------

// // The void type is used to indicate that a function does not return a value.
// // Here's an example:
// function greet(name: string): void {
//     console.log(`Hello, ${name}!`);
// }
// //here the function greet does not return any value , so we are using void type



// // Any type
// //--------------------------------------------
// // The any type is used to indicate that a variable can have any type of value.
// //this is not recommended to use , because it will not show any errors , so it is difficult to debug the code

// //example given below:
// let value: any = 10;
// value = 'Hello';


// //null and undefined types
// //--------------------------------------------
// // The null and undefined types are used to indicate that a variable can have the value null or undefined.
// //example given below:
// let num: number | null = null;
// let str: string | undefined = undefined;



// // Named types
// //--------------------------------------------
// // You can define a type using the type keyword and give it a name.

// //example given below:
// type  statusType = 'Pending' | 'Completed' | 'Failed'

// let CurrentStatus : statusType = 'success' // Error : "success" is not in the statusType , it show an errr

// let NowStatus : statusType = 'Completed' // correct .. and The Typescript automaticaly suggest the type like "Pending" . "Completed" . "Failed"

// // so it realy helpsfull to understand which types can assign to the variable 