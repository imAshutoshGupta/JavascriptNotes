class Student {
    name = ""
    age = 0
    static course_name = "MERN"
    constructor(cname,cage){
        this.name = cname;
        this.age = cage;
    }
    studying(){
        console.log(`${this.name} study for 3hrs a day`);
    }
}
let s1 = new Student("raj",19)
let s2 = new Student("rani",18)
console.log(s1.name);
console.log(s2.name);
s1.studying();
s2.studying();

console.log(Student.course_name);
console.log(Student.course_name);



//Inheritance
class Person{
    vehicle = "Mahindra"
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Employee extends Person{
    constructor(name,age,salary){
        super(name.age)
        this.salary = salary
    }
}

let p1 = new Person("amit",28,75000)
console.log(p1);
console.log(p1.name);
console.log(p1.age);
console.log(p1.salary);