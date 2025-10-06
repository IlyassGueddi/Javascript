// object in javascript is like a dictionnary in python soo we can store a lot of connected values that have  connection and everyone of them have a name //
// ---------- For Eexample ---------- //

let person = {
    name: "mial",
    age: 20,
    isStudent: true,
};

console.log(person.name);// this will print mial
console.log(person.age);// this will print 20 
console.log(person.isStudent);// this will print true 

// we canchange a value or add something for example //

person.age = 17;
person.coutry = "Morocco"

// we can use function inside an object like that 

let person1 = {
    name : "mial",
    greet : function() {
        console.log("hello", + this.name + "!"); // this mean this object
    }
};
person.greet(); // hello, mial!


// we can create an array of objects 

let students = [
    { name: "Ali", age: 19 },
    { name: "manal", age: 20 },
    { name: "Youssef", age: 18 }
];
 for ( i = 0; i < students.length; i ++) {
    console.log(students[i].name + " is " + students[i].age + " year old.");
 }