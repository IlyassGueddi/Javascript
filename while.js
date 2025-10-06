// this is how we write a while loop in javascript //

// ---------- Example ---------- //

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}


// If we want to avoide the infinite while loop we do this for example  //

let condition = true;
while (condition) {
    console.log("Welcome back!")
    condition = false;
}