let sales: number =123_456_789;
let course:string = 'Typescript';
let is_published = true;
let level;
level=1;
level='#';

// annotate with any
function render(document: any) {
    console.log(document)
}

// arrays
// this is valid because js arrays are dynamic
let numbers = [1,2,'3'];
// type annotation
let numbers_all: number [] = [1,2,3]
// empty array is any and we can set anything
let numbers_any = []
// we can use code completionm if we set the type
numbers_all.forEach(n=>n.toExponential)

//tuples
// fixed length array with each value a specific type
let user: [number, string] = [1,"dave"]
// problem w typescript
// user.push(1);

// enums,use PascalCase
enum Size {Small, Medium, Large }

let size : Size = Size.Medium;
//  this shows the value
// the enum js is verbose
console.log(size)
// const generates more optimized js code
const enum SizeConst {Small, Medium, Large};
let new_size :SizeConst = SizeConst.Medium;

// functions
// annotate helps, even return type
function calculateTax(income:number,taxYear: number):number{
    //let x; this can be detected
    if (taxYear< 2022)
      return income *1.2;
    return income *1.3
}
// Typescript does not allow different number of arguments
// we can have optional options with "?", the compiler detects
// if we try to use it
function calculateTax2(income:number,taxYear?: number):number{
    //let x; this can be detected
    if ((taxYear || 2022)< 2022)
      return income *1.2;
    return income *1.3
}
// better, we can use default values
function calculateTax3(income:number,taxYear=2022):number{
    //let x; this can be detected
    if (taxYear< 2022)
      return income *1.2;
    return income *1.3
}
// objects
let employee = {id:1};
// this is error in TS
// employee.name = "Dave"
// we can use type annotation
let employee_new: {
    id:number,
    name:string,
} = {id:1,name: ''}
//we can have optional properties
// we can use type annotation
let employee_opt: {
    id:number,
    name?:string,
} = {id:1}

// we can make properties readonly
let employee_rp: {
    readonly id:number,
    name?:string,
} = {id:1}
// this raises error employee_rp.id =2;

// we can have methods
let employee_w_method: {
    readonly id:number,
    name:string,
    retire: (date:Date) => void
} = {id:1,
    name:"D",
    retire: (date:Date) => {
        console.log(date);
    }}

//  type alias
type Employee = {
    readonly id:number,
    name:string,
    retire: (date:Date) => void
}
let employee_t : Employee = {
    id:2,
    name:"Dave",
    retire: (date:Date)=>{
        console.log(date)
    },
}
// union types
function kgToLbs(weight: number | string):number{
    // the autocomplete only shows methods common to
    // both types, we need to use "Narrowing"
    if(typeof weight === 'number')
        //here the autocomplete sees the number options
        return weight * 2.2;
    else
        //here the autocomplete sees the string options
        return parseInt(weight) * 2.2
}

// intersection types
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable
let textBox:UIWidget = {
    // we need to implement all methods
    drag: () =>{},
    resize: () =>{},
}
// literal types
let quantity: 50 | 100 = 100
// Or use a  type alias
type Quantity = 50 | 100
let quantity_l: Quantity = 100;

// nullable types
function greet(name:string){
    console.log(name.toUpperCase());
}
// we could pass "null" to the function in js, not in ts
//greet(null)
function greet2(name:string | null| undefined){
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola");
}
//optional chaining
type Customer = {
    birthday:Date,
}
function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomer(1)
//optional property access operator
console.log(customer?.birthday?.getFullYear())

// optional element access operator
// for arrays
// customers?.[0]

//optional call
//log?.('a')

