let h1 = document.getElementById("head")
let bt = document.getElementById("btn")

bt.addEventListener("click",()=>{
    h1.style.color="red"
 })

let h2 = document.getElementById("tc")
let btc = document.getElementById("ct")

btc.addEventListener("dblclick",()=>{
    h2.textContent = "new text data"
})

let newtag = document.getElementById("parent")
let btn3 = document.getElementById("btn3")

btn3.addEventListener("click",()=>{
    newtag.innerHTML = "<h1>This is your new heading</h1>"
})

//...spread operator
data1 = [10,20]
data2 = [11,22]
data3 = [data1, data2]
console.log(data3);
data4 = [...data1,...data2]
console.log(data4);
data5 = [...data4,99,...data1,78,98,...data2]
console.log(data5);

data6 = {name:"raj",age:30}
data7 = {salary:35000, city:"pune"}
x = {data6,data7}
console.log(x);
emp = {...data6, data7}
console.log(emp);

//spread in function
function add(...num){
    console.log(num);
    sum = 0
    for(x of num){
        sum+=x;
    }
    console.log(sum);
}
add(50,20,40,30,50,60,90)

//rest operator
let prices = [45,678,67]
let [choco, coffee, samosa] = prices
console.log(choco);
console.log(coffee);
console.log(samosa);

console.log("----using rest----");
let [carrot, ...fruits] = prices
console.log(carrot);
console.log(fruits);

//rest on object
let student = {name:"somya",age:45,city:"pune"}
let {name,...details}=student
console.log(name);
console.log(details);

//rest must be last
function demo(a,...b){
    console.log(a);
    console.log(b);
}
demo(34,56,67,34,52,26)

//working with objects
let empy = {name:"raj", age:45, salary:98000, city:"bangalore"}
function empy_details({name,salary}){
    console.log(name);
    console.log(salary);
}
empy_details(empy)

// destructuring of array values
let arr=[10,"hello","world","javascript"]
let [w,p,,r]=arr;
console.log(w);
console.log(r);






































