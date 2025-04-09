// What is TypeScript ? 
var userDetails = {
    name: 'Adhil',
    // if if dont add age property it will throw an error,because we are defining the type of the object
    age: 18,
    isStudent: true
};
var skills = ['Reading', 'Coding', 'Traveling', 3, 3, 5]; // Array of strings and numbers using union operator "|"
// union operator "|" is used to define the multiple types of the array
function getUserName(_a) {
    var name = _a.name, age = _a.age;
    return name;
}
getUserName({ name: 'Adhil', age: 23 }); // here we are passing the object with the properties name and age , so we are defining the type of the object in the function itself
// Void type
//--------------------------------------------
// The void type is used to indicate that a function does not return a value.
// Here's an example:
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
//here the function greet does not return any value , so we are using void type
// Any type
//--------------------------------------------
// The any type is used to indicate that a variable can have any type of value.
//this is not recommended to use , because it will not show any errors , so it is difficult to debug the code
//example given below:
var value = 10;
value = 'Hello';
//null and undefined types
//--------------------------------------------
// The null and undefined types are used to indicate that a variable can have the value null or undefined.
//example given below:
var num = null;
var str = undefined;
var CurrentStatus = 'success'; // Error : "success" is not in the statusType , it show an errr
var NowStatus = 'Completed'; // correct .. and The Typescript automaticaly suggest the type like "Pending" . "Completed" . "Failed"
// so it realy helpsfull to understand which types can assign to the variable 
