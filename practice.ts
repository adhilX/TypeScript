// interface User {
//  name : string
//  age? :number | string
//  Istudent : boolean  
// }


// function newUser(user:Student){
//     console.log('helooo',user.name)
//     if(user.istudent){
//         console.log('this is a student')
//     }
// }

// const user:Student = {
// name :'adhil',
// istudent :true
// }

// newUser(user)



// type Student = {
//     name : String 
//     age ?: number | string
//     istudent : boolean

// }

// interface customer extends User {
//     productCount : number
// }


// const ff:customer= {
//  Istudent : true,
//  productCount : 3,
//  name  : 'jaa'
// }

// let vv:unknown = 22

// if (typeof vv === 'number') vv.toString()


// class Admin {
//   private name: string
//    age: number
//     constructor(name : string , age : number){
//         this.name = name
//         this.age = age 
//     }

//     detales():void{
//         console.log(`your name is ${this.name} age : ${this.age}`)
//     }
// }

// let admin = new Admin('adhil',33)
// console.log(admin.age)

// class Animal {
//     constructor(public name: string) {}
  
//     makeSound() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   class Dog extends Animal {
//     makeSound() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const myDog = new Animal("Buddy");
//   myDog.makeSound(); // Buddy barks.
  


// abstract class Shape {
//     getArea(): number {
//       return 0;
//     }
//   }

//   class Circle extends Shape {
//     constructor(private radius: number) {
//       super();
//     }
  
//     getArea(): number {
//       return  this.radius * this.radius;
//     }
//   }
  
//   const myCircle = new Circle(5);
//   console.log("Circle Area:", myCircle.getArea()); 

//   let num: number = 44 as unknown as number;
//   console.log(num); // Output: "hello" (❌ Wrong behavior)
  
// function Logger(target: Function) {
//     console.log(`Class ${target.name} was created.`);
// }

// @Logger
// class Person {
//     constructor(public name: string) {}

//     readonly aa = 34
// }
// class Calculator {
//     // Multiple method signatures
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
    
//     // Implementation
//     add(a: any, b: any): any {
//       return a + b;
//     }
//   }
  
//   const calc = new Calculator();
//   console.log(calc.add(5, 10));  // Output: 15
//   console.log(calc.add("Hello, ", "World!"));  // Output: Hello, World!
  



//   class animal {
//     name :string
//     constructor(name:string){
//         this.name=name
//     }

//     makesound():void{
//       console.log('make sound')
//     }
//   }

//   class dog extends animal{


//     makesound(): void {
//         console.log('bwww')
//     }
//   }


//   const myDog = new dog('pappy')
//   myDog.makesound()
  

// class myCircle {

//     constructor(){}

//     add(val1: string , val13 ?: string):string
//     add(val1:number , val13 :number):number

//     add(val1:any , val13 : any):any{
//         return val1+val13
//     }
// }

// const ab =[{a:3},{a:3},{a:3},{a:3},{a:3}] 
// type datatype = {a:number}
// function sum (arr:datatype[]):number{
  
//  return   arr.reduce((acc,Val)=>{
//    return acc+ Val.a },0)
// }

// console.log(sum(ab))


// interface vehicle {
//     move():void
// }

// class car implements vehicle{

//     move(): void {
//         console.log('car is moving')
//     }
// }

// class plain implements vehicle{
//     move(): void {
//         console.log('plain is fiying')
//     }
// }

// function movef(val:vehicle){
//     val.move()
// }

// movef(new plain)


// interface ExampleType  {
//     [key: number]: number;
//   };
  
//   const myObject: ExampleType = {
//     3age : 25,
//     3: 175,
//     6: 70,
//     // name: "John"  ❌ ERROR: Value must be a number
//   };
  

// class Student {
//     [key: string]: string | number;
//     name: string;
    
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
//   const student1 = new Student("Adhil");
//   student1.age = 18;
//   student1.city = "Kochi";
  
//   console.log(student1); // { name: 'Adhil', age: 18, city: 'Kochi' }
// function newPromise(success: boolean): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (success) {
//           resolve("Success!");
//         } else {
//           reject("Failed");
//         }
//       }, 2000);
//     });
//   }
  
//   // Calling the function
//   newPromise(true)
//     .then((message) => {
//       console.log("Resolved:", message);
//     })
//     .catch((error) => {
//       console.log("Rejected:", error);
//     });
  
//   newPromise(false)
//     .then((message) => {
//       console.log("Resolved:", message);
//     })
//     .catch((error) => {
//       console.log("Rejected:", error);
//     });
  
enum staues {pending=1 , complete , reject}

type tuple= [string , Number?]

const aa:tuple =['aa']


let arr:[string,number] = ['tryy',333]


let str =''


