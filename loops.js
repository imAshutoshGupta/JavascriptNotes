//display numbers 1 to 5
i = 1
for(i; i<=5; i++){
    console.log(i)
}

// display 1, 4, 27, 256, 3125
z = 1
for(z; z<=5; z++){
    console.log(z ** z)
}

// for loop on array
console.log("----loop on array type 1-----");
prices = [199, 80, 40, 199, 56, 70]
console.log(prices.length)
for(let i=0; i<prices.length; i++){
    console.log(prices[i]);
}

console.log("----loop on array type 2-----");
for(price of prices){
    console.log(price);
}

console.log("----loop on array type 3-----");
for(price in prices){
    console.log(price,prices[price]);
}


