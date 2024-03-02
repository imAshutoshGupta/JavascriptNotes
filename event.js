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