//object = collection of key value pair
name = "raj",
city = "thane"
employee = {
    name : name,
    city,
    salary:25000,
    accounts:["ICICI", "HDFC"],
    address:{
        landmark: "antop hill",
        pincode:"4213077"
    }
}

console.log(employee.name);
console.log(employee.city);
console.log(employee.salary);
console.log(employee.accounts[1]);
console.log(employee.address.landmark);

//undefined
var account_number;
console.log(account_number); //undefined

//variable hoisting
// we can access var variables before declaring
console.log(bank_account);
var bank_account;

// cant access let variable before declaring
//console.log(new_address); //error
// let new_address;


employee['phone'] = "989741574"
console.log(employee.phone)

// NULL
var data = null
console.log(data)













