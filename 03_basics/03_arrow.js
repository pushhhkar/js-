const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
//console.log(this)

/*function chai() {
    let username = "hitesh"
    console.log(this.username);//undefined
    console.log(this);
}

chai()*/

/*const chai = function(){
       let username = "hitesh"
       console.log(this.username);
}*/

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
//chai() // undefined

//const addTwo = (num1, num2) => {
  //  return num1 +num2
//}
//console.log(addTwo(3,4))

//const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => ({username: "hitesh"})//for object

console.log(addTwo(3,4))

const myArray = [2, 5, 3, 7, 8]

