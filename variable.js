console.log("hello js");

// VARIABLES

{
    var a = 10
    let b = 20
    const c = 30
}
console.log(a); // 10
//console.log(b); // ReferenceError: b is not defined
// console.log(c) // SyntaxError

//update = we can only update var and let
var d = 11
let e = 22
const f = 33

console.log(d)
d = 44
console.log(d)

console.log(e)
e = 55
console.log(e)

console.log(f)
// f = 66 
console.log(f)  // TypeError, you cannot change the value of a constant variable!

//re declaration = we can only redeclare var

var g = 100
var g = "hello"
console.log(g) // hello

let h = 100
// let h = 'hello' // Error, because let does not allow to re declare the same variable

const i = 100
//const i = "hello"  // Error, because const does not allow to re



