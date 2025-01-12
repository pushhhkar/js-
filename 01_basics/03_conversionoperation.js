let scor = 33 // if put this like "33" it will be of type string

console.log(typeof scor);
let score = "33";
console.log(typeof score);
let valueInNumber = Number(score) //converted the string to the number
console.log(typeof valueInNumber);
// "33"=> 33
// "33abc"=> NaN ye convert to dikhayagi mgr hoti nhi hai
// true=> 1; false=>0

let isLoggedIn = 1// if we put it empty we will get false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0=>false
// ""=>false
// "pushkar"=>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *****************operations******************

let value =3
let negValue =-value
// console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3); // 2 to the power 3
//console.log(2/3);
//console.log(2%3);
let str1 = "hello"
let str2 = " pushkar"

let str3 = str1 + str2
console.log(str3);
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(+true);
console.log(+"");

let num1, num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
