// // infer types (implicit typing) in TypeScript
// //--------------------------------------------
// // TypeScript figures out the type of a variable from the value assigned to it.
// let userName = 'Adhil'
// let age = 18 
//   age = '18' // Error: Type 'string' is not assignable to type 'number'.
// // In the above example, we defined a variable named age and assigned the value 18 to it.
// // TypeScript inferred the type of the age variable as number based on the initial value of 18. 
// // When we try to assign a string value to the age variable, TypeScript throws an error because the type of the age variable is number
// Defing types (explicit typing) in TypeScript
//--------------------------------------------
// You can explicitly define the type of a variable using a colon (:) followed by the type.
// This is known as explicit typing.
// var userName = 'Adhil'; // we deleted the type of the variable as string
// var age = 18;
// var isStudent = true;
// var hobbies = ['Reading', 'Coding', 'Traveling']; // Array of strings
// // let count:[] = [1, 2, 3, 4, 5]   // Error: it is empty array so it is not able to insert number values ,the array is always empty
// var count = [1, 2, 3, 4, 5]; // Correct
// var userDetails = {
//     // Here we are defining the type of the object , in this type of defining we must use all the properties of the object , else it will throw an error
//     name: 'Adhil', // Here we could not assing any other type of value to the name property , only string is allowed
//     age: 18,
//     isStudent: true,
//     // Salary : 10000 // Error: we dont have the property named "Salary" in the type of the object , so it will throw an error
// };
// // userDetails.age = '18' // Error: here we are trying to assign a string value to the age property , but the type of the age property is number
