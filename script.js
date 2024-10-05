/*
let js = "amazing";
if(js === "amazing") alert("Javascript is fun!!");

        
console.log(40+8+23-10);


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


//switch

const day = "monday";
switch(day) {
    case "monday":
        console.log("Go to school");
        console.log("Go do some coding");
        console.log("Go to the gym");
        break;
    case "tuesday":
        console.log("Go to school");
        console.log("Go do some coding");
        break;
    case "wednesday":
        console.log("Go to school");
        console.log("Go do some coding");
        console.log("Go to the gym");
        break;
    case "thirsday":
        console.log("Go to school");
        console.log("Go do some coding");
        break;
    case "friday":
        console.log("Go to school");
        console.log("Go to the gym");
        break; 
    case "saturday":
        console.log("Practive AP");
        console.log("Go do some coding");
        break; 
    case "sunday":
        console.log("Practice AP");
        console.log("Go to the gym");
        break;
         
}


//functions
function calcAge(birthYear){
    return 2024-birthYear;
}

const age1 =calcAge(2007);
console.log(age1);

const calcAge2 = function(birthYear){
    return 2024-birthYear;
}

const age2= calcAge2(2007);

console.log(age1, age2);


// arrow function
const calcAge3 = birthYear =>  2024- birthYear;
const age3 = calcAge3(2007);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
    const age = 2024- birthYear;
    const retirement = 65- age;
    return retirement;
}

console.log(yearsUntilRetirement(2007));



//Arrays
const friends = ["Emir" , "Kaan" , "Mert"];
friends[2] = "Murat";
console.log(friends);

const years = new Array(1991, 1994, 2001, 2045 , 2049);
console.log(years.length);

const firstName = "Ates";
const ates = [firstName, "Parıltı" , 2024- 2007 , "Student" , friends];
console.log(ates);

const calcAge4 = function(dogumyili) {
    return 2024 - dogumyili;
}

const age4 = calcAge4(years[0]);

//Add element
friends.unshift("Mert");
console.log(friends);

//Remove element
friends.pop(); //Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first element

console.log(friends.indexOf("Mert"));
console.log(friends.indexOf("Emir"));

console.log(friends.includes("Emir")); //kontrol


*/

