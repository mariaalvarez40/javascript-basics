/* 
KEY POINTS 

1. Increment & Decrement 
2. Comparison Operators: evaluate if true or false
    a.  < <= > >= == != 
3. Logicial Opereators: Allows us to connect two or more expressions
    a. && 
    b. || 
    let andOperator = a && b;  // Logical AND
    let orOperator = a || b;   // Logical OR
    let notOperator = !a;      // Logical NOT

*/

// Postfix Increment 
console.log("Postfix")
var number = 0;
console.log(number++);
console.log(number);
console.log(number --);
console.log(number);

// Prefix Increment 
console.log("Prefix")
var two = 0;
console.log(++two);
console.log(--two);

// Comparison Operators
console.log("Comparison Operators");
console.log(10 == 10);
console.log(10 < 10);
console.log("A"=="B");
console.log("A"!="B");

//Logical Operators 
console.log("Logical Opereators");
console.log(10 == 10 && "A" == "A");
console.log(10 == 10 && "A" == "AA");
console.log(10 == 10 || "A" == "AA");