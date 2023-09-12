/*
KEY POINTS

1. A block of reusable code that performs a specific task or set of tasks

Components of a function
a. Function Name: This is an identifier that you choose to name your function. 
    It should follow the same naming rules as variables.

b. Parameters: These are variables declared in the function's parentheses, which act as placeholders for values that you can pass to the function when you call it. 
    Parameters are optional, and a function can have zero or more of them.

c. Function Body: This is the block of code enclosed in curly braces {} that contains the statements and logic to perform a specific task. 
    This is where you define what the function does.

d. Return Statement: Functions can optionally return a value using the return statement. 
    When a return statement is executed, it immediately exits the function, and the specified value is passed back to the caller. 
    If a function doesn't have a return statement or if it omits the value to return, it returns undefined by default.
*/

function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition;
}

var results = addNumbers(1, 10);
console.log(results);

var person = {
    name: "barbie"
}


//Examples of built in methods 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// Useful built in methods: https://dev.to/elpepebenitez/built-in-methods-in-javascript-4bll 
console.log(Object.values(person));
console.log(Object.keys(person));
console.log("Barbie".toUpperCase());