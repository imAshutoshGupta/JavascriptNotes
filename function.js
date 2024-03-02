function add()
{
    let x = 10
    let y = 5
    result = x+y
    console.log(result);
}
add()
add()
add()

function sub(a,b)
{
    result = a-b
    console.log(result);
}
sub(10,5)

// return keyword

function div(){
    var x=100
    let y=20
    const result=x/y
    console.log(result);
    return result;
}
div()
console.log(div());
console.log(div());

output = div()
console.log(output);

// anonymous function
let join_name = function(fname,lname){
    console.log(`full name is ${fname + lname}`);
}
join_name("steve","jobs")

//arrow functions
let multi = (x,y) => {
    console.log(x*y);
}
multi(3,7)