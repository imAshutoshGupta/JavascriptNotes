//check given number is even or odd
let a = prompt("enter a number")
if (a % 2 == 0) {
    console.log(`${a} is even`);
    }
else {
    console.log(`${a} is odd`);
}
// check if given digit is two digit number
let b = 658
if(b>9 && b<100){
    console.log(`${b} is two digit number`)
}
else {
    console.log( `${b} is not two digit number`)
}

//largest among three numbers
let x=10, y=5,  z=7;
if (x > y && x >z ) {
    console.log( `The largest number is ${x}` );
} else if (y > x && y > z) {
    console.log( `The largest number is ${y}` );
} else {
    console.log( `The largest number is ${z}` );
}