
if (true) {
    let a = 10
const b =20;
var c = 30// it should not be printed beacuse it's under scope but due to var it got printed aviod var
//console.log("INNER:", a);

}



//console.log(a);
//console.log(b);
//console.log(c);

function one(){
     const username = "hitesh"

     function two(){
        const website = "youtube"
        console.log(username);
     }
     //console.log(website);// smaller function can access all value of larger function but larger function can't acess the value of small

     two()
}

//one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube"
      //  console.log(username + website);
    }
   // console.log(website);// can't access doesn't have scope
}
//console.log(username);//can't access doesn't have scope

// +++++++++++++++++interesting++++++++++++++++++++

function addone(num){
    return num +1
}

addone(5)