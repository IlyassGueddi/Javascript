// we write functions n javascript like that //

/*
function functionname(Paremetre) {
    the code
} 
*/

// and we call it like that //

/* 
functionname(arguments)
*/

// ---------- Examples ---------- //

// Simple example
function sayHello() {
    console.log("Hello!");
}
sayHello();

// function with parametre 

function greet(name) {
    console.log("Hello " + name + "!")
}

greet("mial") // Hello mial!
greet("manal") // hello manal!

// a function return a value 

function add(a, b) {
    return a + b ;
}

let result = add(3, 4);
console.log(result);

// storing a variable function

const multiply = function(x, y) {
    return x * y ;
};

console.log(multiply(4, 5));