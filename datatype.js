let arr = [10, 20, 30, "hello", 10]
console.log(arr)
console.log(typeof(arr));
arr.push(40) // add at end
console.log(arr)
arr.unshift(50) // add at start
console.log(arr)
arr.pop() //remove elem from end
console.log(arr)
arr.shift() // remove elem from start
console.log(arr)


// Access array items
console.log(arr[0])
console.log(arr.length)
console.log(arr[4])  // undefined (because doesnt exist)
console.log(arr.indexOf(10)) //0
console.log(arr.indexOf(100)) //-1
