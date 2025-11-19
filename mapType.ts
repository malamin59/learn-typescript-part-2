
// create a arrayOf number 
const arrayOfNumber : number[] = [ 1, 2, 3,4 ,5];
// create a array with number 
const arrayOfString :  string [] = ["1","2", "3", "4", "5"];

const arrayOfStringUsingMap : string[] = arrayOfNumber.map((num) =>(
    num.toString()
))
console.log(arrayOfStringUsingMap)

type AreaOfNumber = {
    height : number, 
    width: number
}
type height = AreaOfNumber['height'];

// type AreaOfSting = {
//     height: string
//     width: string
// };



type AreaOfSting = { 
[key in  keyof AreaOfNumber ] : string
}