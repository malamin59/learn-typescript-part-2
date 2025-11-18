
/* Implement Basic interface */

// interface Parson {
//     name: string;
//     age: number;
//     greet():void;
// }

// const user : Parson = {
//  name:"AL AMIN",
//  age:12,
//  greet() {
//     console.log(`Hello my name is ${this.name}`);
    
//  }

// }
// user.greet()


/* Interface */

type User = {
 name:string, 
 age: number
}

// Interface work with only object type: array, object, function
interface IUser {
     name: string;
     age: Number
}



type Role  = {
    role: "admin"|"user"
}

type UserWithRole  = User & Role

interface IUserWitRole  extends IUser{
    role:"admin" | "user"
}

const User1: UserWithRole =  {
    name:"",
    age:12,
    role:"admin"
}  

type isAdmin = boolean;


/// function



type Add = (num1: number, num2: number) => number;


const add : Add = (num1, num2) => num1 + num2

type Friends = string[]

interface IFriends {
    [index: number] : string
}

const friends : IFriends = ['A', 'B', 'C', 'B'];
