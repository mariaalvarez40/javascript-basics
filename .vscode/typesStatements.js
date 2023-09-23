/*
KEY POINTS

1. run piece of code depending on condition 

*/

console.log("Ex: If statement");
if (false) {
    console.log("Hi Barbie");
}
if (true) {
    console.log("Hi Barbie");
}


console.log("Ex: If else");
var gender = "F";
if (gender == "F") {
    console.log("Female")
}else if (gender == "M"){
    console.log("Male")
}
else {
    console.log("Alien")
}

console.log("Ex: Ternary if Statement");
var number = 101;
var result = number % 2 == 0 ? 'Even' : 'Odd';
console.log(result); 

console.log("Ex: Switch Statement");
var gender = 'F';
switch(gender) {
    case "M":
        console.log('Male');
        break;
    case "F":
        console.log('Female');
        break;
    default:
        console.log('Unknown');
}