// class Test<T> {
//
//     print(valu: T) { // string - number
//
//         if (valu instanceof Salary)
//             return (valu.salary).toFixed(2);
//
//         if (typeof valu == "boolean")
//             return (valu ? 1 : 0).toFixed(2);
//
//         return parseFloat(new String(valu).toString()).toFixed(2)
//     }
//
// }
//
//
// class Salary {
//     get salary(): number {
//         return this._salary;
//     }
//
//     private _salary: number;
//
//     constructor(salay: number) {
//         this._salary = salay;
//     }
// }
//
//
// console.log(new Test<Salary>().print(new Salary(60)))
// console.log(new Test<number>().print(60))
// console.log(new Test<string>().print("60"))
// console.log(new Test<number>().print(60.5))
// console.log(new Test<boolean>().print(true))
//

class Res<T extends { [k: string]: number }> {
    status: boolean

    constructor(number: number) {
        if (number > 50)
            this.status = true
        else
            this.status = false
    }

    json(): T {
        if (this.status) { // @ts-ignore
            return {StatusCode: 200, message: "ok"}
        } else {
            // @ts-ignore
            return {StatusCode: 400, message: "error"}
        }
    }
}

console.log(new Res<{status}>(60).json().status)