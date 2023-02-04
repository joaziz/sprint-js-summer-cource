const {appendFile} = require("fs").promises


let UserName: string = process.argv[2];
let Age: number = isNaN(parseInt(process.argv[3] || "0")) ? 0 : parseInt(process.argv[3] || "0");
let accountNO: number = parseInt(process.argv[4] || "0");
const isAdult = (age: number): boolean => {
    return age > 18;
}

class Person {


    constructor(public name: string) {

    }
}

// setTimeout(function () {
//     v = "fdff";
// }, 5000)

let Ahmed: Person = new Person('ahmed');
let Adel: Person = new Person('Adel');
console.log("MR. " + Ahmed.name)
console.log("MR. " + Adel.name)

// appendFile("file.txt", `name : ${UserName} - age:  ${Age} - Bank Account ${accountNO} - ${isAdult(Age) ? 'adult' : 'kid'}`).then(console.log)


type person = { name: string, age: number, gender: 'male' | 'female' }

function getUsers(): person[] {
    return [
        {name: "ahmed", age: 22, gender: 'female'},
        {name: "adel", age: 22, gender: 'female'},
        {name: "sameh", age: 22, gender: 'female'}
    ]
}


let genders: string[] = getUsers().map(u => u.name)

console.log(genders)


let v: any;

v = 20;

console.log(v)

// nestjs
// typescript Generics