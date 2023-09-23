/*
KEY POINTS
1. Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. 
2. This means that, in the scope where a variable or function is declared, it can be accessed before it's declared in the code.

3. Hoisting only applies to variable declarations, not variable assignments. For example, the following code will not work:
    console.log(foo); // undefined
    var foo = 1;

4. Hoisting can also be used with functions. For example, the following code will work:
    greet(); // "Hello, world!"
    function greet() {
    console.log("Hello, world!");
    }
    
5.Tips for avoiding hoisting bugs:
    Use the let or const keywords to declare variables. These keywords do not support hoisting, so they can help to prevent bugs.
    Use strict mode. Strict mode does not allow undeclared variables to be used, which can help to prevent hoisting bugs.
    Be careful when using function expressions. Function expressions are hoisted, so they can be called before they are declared.

Types of Hoisting
1. Variable 
2. Function 
6. What is the difference between let and const?
    a. Let 
        1. Block scoped
        2. can be reassigned
    b. Const
        1. Block scoped
        2. cannot be reassigned 

7. When to use let over const?
    a. Use let for variables whose values need to be changed, such as loop counters or temporary variables.
    b. Use const for variables that are initialized once and then never changed, such as configuration variables or the results of database queries.
    c. Use const for constants, such as mathematical constants or the names of enum values

*/

//AVOID USING VAR!!!!!
for (var i=0; i<=10; i++){
    console.log(i);
}
console.log("value of i outside loop" + i);


// Let 
console.log("Ex: Let");
for (let i=0; i<=10; i++){
    console.log(i);
}

// Const
console.log("Ex: Const");
const car = "Pink";
const carObject = {};
carObject["Red"] = car;

console.log(car);
console.log(carObject);