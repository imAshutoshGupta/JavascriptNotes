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















































