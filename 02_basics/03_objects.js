// singleton(when we use literals singleton doesn't exist)

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
[mySym]: "myKey1",//always use square bracket if you not it will work as a string not symbol
    location: "patna",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.email)//acessing objects
console.log(JsUser["email"])//acsessing objects
console.log(JsUser["full name"])//acsessing objects
console.log(JsUser[mySym])//acsessing objects

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());