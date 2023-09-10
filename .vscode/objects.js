/* 
1) In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs.
2) Objects can hold various data types as values, including numbers, strings, other objects, functions, and more.
*/ 

// Example of Object Literal Notation

var person = {
    firstName: "Barbie",
    age: 21,
    isFemale: true,
    balance: 100.1,
    dob: new Date(2000, 4, 18).toJSON(),
    address: {
        city: "Barbie Land",
        postCcode: "777",
    }
};
console.log(person);
console.log(person.address);

// Example of 'new Object()' using Constructor
/*
1) In this approach, we first create an empty object using the new Object() constructor and then add properties and their values to it using dot notation.
2) You can also access and modify object properties using dot notation or bracket notation:

*/
var car = new Object();
car.make = "Toyota";
car.color = "pink";
car.year = 2023;

console.log(car["make"]);
console.log(car.year);

// Only retrieves values or keys from object 
console.log(Object.values(car));
console.log(Object.keys(car));

//Turns object into string 
console.log(JSON.stringify(car));