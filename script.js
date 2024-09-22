/*
let js = "amazing";
if(js === "amazing") alert("Javascript is fun!!");

        
console.log(40+8+23-10);
*/
/*
const age= "18";
if(age === 18) console.log("You just become an adult (strict)");
if(age == 18) console.log("You just become an adult (loose)");

const favorite = prompt("Whats your favorite number?");
console.log(favorite);

if (favorite == 23) {
    console.log("Cool! 23 is an amazing number");
} else if (favorite == 7) {
    console.log("7 is a cool number too")
} else {
    console.log("Your favorite number is not 23 or 7")
}
*/

const hasDriversLisence = true;
const hasGoodVision = true;

console.log(hasDriversLisence && hasGoodVision);
console.log(!hasDriversLisence && hasGoodVision);
console.log(hasDriversLisence || hasGoodVision);

const shouldDrive = hasDriversLisence && hasGoodVision;

if(shouldDrive){
    console.log("You are able to drive!")
}else {
    console.log("Someone else should drive!")
}