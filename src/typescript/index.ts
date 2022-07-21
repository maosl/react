type Person ={
    name:string,
    age:number
}

const Teacher:Partial<Person> ={}
const SoftAngine:Omit<Person,'name'|'age'> ={}