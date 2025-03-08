// primitive
// 7 types: string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = false
let userEmail

const id = symbol("123")
const anotherId = symbol("123")

console.log(id === anotherId);
const bigNumber = 3554781224244n   //bigint



//reference(non-primitve)
// Array, Object, Functions

const heros = ["shakitman", "nagaraj", "doga"];
let myObj =  {
    name: "pushkar",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-primitive )

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = " chaiaurcode"

console.log(myYoutubename); // hiteshchoudharydotcom
console.log(anothername);  // chaiaurcode

//heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email); //hitesh@google.com
console.log(userOne.email); // hitesh@google.com