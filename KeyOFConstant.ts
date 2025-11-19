// ketOfConstant
// keyof : type operator

type RichPeopleVehicle  = {
    car : string, 
    bike : string, 
    cng: string, 
}

type MyVehicle1 = "bike" | "cNG" | "car";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle : MyVehicle1 =  "cNG";

type User = {
    id: number,
    name: string, 
    address:{
        city: string
    }
}
const user : User = {
    id:23,
    name:"alamin",
    address:{
        city:"chandpur"
    }
}

const myId = user['id'];
const myName = user['name']
const myAddress = user['address'];
// console.log({myId, myName, myAddress});

    const getPropertyFromObject = <X> (obj:X, key: keyof X) =>{
        return obj[key]
    }

// const result = getPropertyFromObject(user, "address");
// console.log(result);
const product = {
    brand:"ht"
}

const student = {
    name:"AL AMIN", 
    id:3453
}
const result1 =  getPropertyFromObject(product, "brand")
const result2 =  getPropertyFromObject(student, "name" )


