let anything : any;
anything = "23";


(anything as string)

const kgToGramConvertor = (input: string | number | undefined) =>{
if(typeof input === 'number') {
return input * 1000;
}
else if(typeof input === 'string') {
    const [value] = input.split(" ")
    return `Converted output is: ${Number (value)}`
}
}

const result1 = kgToGramConvertor(2) as Number;
const result2 = kgToGramConvertor("20 kg") as string
console.log(result1)
console.log(result2)


type Custom = {
    message: string;
}

try{

}
catch(err){
    console.log((err as Custom).message)
}

