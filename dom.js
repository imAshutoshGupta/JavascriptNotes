//get element by id
let in_green = document.getElementById("green")
console.log(in_green);
in_green.style.color = "lightgreen"

let in_red = document.getElementById("red")
console.log(in_red);
in_red.style.color = "red"

let h2 = document.getElementsByTagName("h2")
console.log(h2);
//h2.style.color = "blue"
for(x of h2){
    x.style.color = "blue"
}

let purple = document.getElementsByClassName("in_purple")
console.log(purple);
for (y of purple){
    y.style.color = "purple"
}

let d1 = document.querySelector("div")
d1.style.color = "pink"

let d2 = document.querySelectorAll("div")
d2.style.backgroundColor = "yellow"