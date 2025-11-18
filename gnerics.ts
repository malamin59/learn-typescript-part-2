// dynamically generalize


type GenericArray<T> = Array<T>

const friends : GenericArray<string>= [ 'A', 'B' ,'C', 'D'] ;

const rollNumbers : GenericArray<number> = [1,2,4];


const isEligibleList : GenericArray<boolean> = [true, false, true]




const userList: GenericArray<{name: string; age: number }> = [
    {
 name:"al amin",
 age:12,

    }, 
    {
name:"Y",
age:34
    }
]

const sqrFunc = (value:number) =>{
    return value * value
}

sqrFunc(4);


type  Coordinates<X, Y> = [X, Y]
const Coordinates1: Coordinates<number, number> = [4, 34];
const Coordinates2: Coordinates<string, string> = ["24", "34"];
