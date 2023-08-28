/* 
1. Static vs. Dynamic Typing:

    JavaScript: Dynamically typed, meaning data types are determined at runtime and can change.
    Other Languages: Some languages use static typing, where data types are determined at compile-time and cannot change during runtime. Examples include Java, C++, and Swift.

2. Explicit vs. Implicit Typing:

    JavaScript: Allows for implicit type conversion, which can lead to unexpected behavior in some cases.
    Other Languages: Some languages prioritize explicit type conversions to prevent accidental type coercion. Rust and Go are examples of languages that emphasize explicit typing.
*/

var firstName = "Barbie";
var age = 21;
var isFemale = true;
var balance =  100.32;
var dob = new Date(2000, 3, 18);
var person = {};
var empty = undefined;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isFemale);
console.log(typeof balance);
console.log(typeof dob);
console.log(typeof person);