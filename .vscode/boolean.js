/* 
Key Points about Booleans
1. Literal Values: Booleans have two literal values, true and false. 
These values are case-sensitive, so True or False are not valid Boolean values.
2. Used in Conditions: Booleans are commonly used in conditional statements such as if, else, and switch.
3. Booleans are frequently used with logical operators like && (logical AND), || (logical OR), and ! (logical NOT) 
4. Comparison operators like ===, !==, <, >, <=, and >= return Boolean values based on the comparison's result.
5. Falsy and Truthy Values: In addition to true and false, JavaScript also has truthy and falsy values. 
Certain values, such as 0, an empty string "", null, undefined, and NaN, are considered falsy. 
All other values are considered truthy when used in a Boolean context. This behavior is important when evaluating conditions with non-Boolean values.

*/ 

var isAdult = true;
if (isAdult) {
    console.log("is adult")
}
else {
    console.log("is not an adult");
}

//Examples 
console.log(!true);

git config --global user.email "you@example.com"
  git config --global user.name "Your Nam