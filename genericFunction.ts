// Generic Function 

// const createArrayWithString = ( value: string) =>[value];


// const createArrayWithNumber = (value: number)=> [value];
// const createArrayWithNumObj =(value: {id: number}, name: string) => {
//     return [value]
// }

const createArrayWithGeneric = <T> (value:T) =>{
    return [value]
}


const arrayString =createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(989)
const arrObj = createArrayWithGeneric({
    id:23, 
    name:"Next level boot camp"
})
// console.log({arrNum, arrObj, arrayString})


// tuple 

const createArrayWithTuple = (param1: string, param2: string) =>{

    [param1, param2]

}

const createArrayWithTupleGeneric = <X, Y>(param1: X,   param2: Y) =>[
    param1, 
    param2
]

const res1  = createArrayWithTupleGeneric('', false)
const res2  = createArrayWithTupleGeneric('3434',{
    name:"AL AMIN"
})

 //Course 

 const studentsToCourse  = <T> (studentsInfo: T)=>{
    return {
        course:"Next level", 
        ...studentsInfo
    }
 }
 const student1 = {
    id: 23, 
    name: "Nothing", 
    hasPan:true
 } 
 const student2 = {
    id: 3456, 
    name: "others", 
    hasCar: true, 
    isMarried: true
 }
 
 const result = studentsToCourse({student1, student2});
 console.log(result);
 