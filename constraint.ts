// Constrain : Structure rules dey

type Student  ={id: number, name:string, hasWatch?: boolean,isMarried?: boolean}

 const studentsToCou  = <T extends Student> (studentsInfo: T)=>{
    return {
        course:"Next level", 
        ...studentsInfo
    }
 }
 const student12 = {
    id: 3456, 
    name: "others", 
    hasCar: true, 
    isMarried: true
 }
  
 const student3 = {
    id:45, 
    name:'alak',
    hasWatch :true
 }


 const result1 = studentsToCou(student12, student3);
 console.log(result1); 