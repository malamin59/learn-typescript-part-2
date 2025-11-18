/* learn genericsInterface */

// create interface 
 interface Developer  <T, X = null >{
    name: string;
    salary:number
    device:{
        brand: string, 
        model: string,
        releasedYer: string; 
   }, 
   smartwatch: T, 
   bike?: X 

 }

interface withoutBrand {
        heartRate: string;
        stopwatch: boolean;
}

 const poorDeveloper  : Developer <withoutBrand, {
    brand: 'yamaha', 
    enginCapacity: '3434cc'
 }>= {
    name:"AL AMIN", 
    salary: 200, 
    device:{
        brand: 'me', 
        model: '53.4', 
        releasedYer:'45'
    }, 
    smartwatch: {
        heartRate: '3434', 
        stopwatch: true
    }


 }

 interface AppleWatch {
        heartRate: string;
        stopwatch: boolean;
       callSupport: boolean, 
       AiFuture: boolean
 } 
 const richDeveloper  : Developer <AppleWatch>= {
    name:"AL AMIN", 
    salary: 200, 
    device:{
        brand: 'apple', 
        model: '4343443', 
        releasedYer:'4'
    }, 
    smartwatch: {
        heartRate: '3434', 
        stopwatch: true,
        callSupport: true, 
        AiFuture: true
    }, 
 bike:null
 


 }



