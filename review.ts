enum staues {complete , pending , reject }


let usesr: string | number 



type User = {
    name : string,
    age : number | string
    address : string
}

type Admin = Pick<User , 'name'| 'age'> 

let  ssss : string = 'adhil'


console.log(`my name is ${ssss}`)


function getname<T>(name: T):T{
return name

}

getname<string>('adhil')


function sum(arr:number[]):number{
  

   return arr.reduce((acc,val)=>{
        return acc+ val
    },0)

}

console.log(sum([2,3,4,5]))