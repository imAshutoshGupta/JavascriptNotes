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

//switch case
let day_number = Number(prompt("enter a number"))
console.log(typeof(day_number))
switch (day_number){
    case 0:
        alert("today is sunday")
        break;
    case 1:
        alert("today is monday")
        break;
    case 2:
        alert("today is tuesday")
        break;
    case 3:
        alert("today is wednesday")
        break;
    case 4:
        alert("today is thursday")
        break;
    case 5:
        alert("today is friday")
        break;
    case 6:
        alert("today is saturday")
        break;
    default:
        alert("enter a number")
}