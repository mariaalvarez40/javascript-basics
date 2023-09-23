/*
KEY POINTS 

1. Allows you to execute a block of code repeatedly as long as a specified condition is true.

TYPES OF LOOPS 
1. For loop: best if used wheen you know in advancee how many times you want to eexecutre the codee block
2. While Loop: repeateadly executrees a block of code as long as a specefied condition is true
3. Do-While Loop: Similar to the while loop, but it always executes the code block at least once and then checks the condition
4. For...in loop: iterates over the properties of an object
5. For...of loop: iterate over iterable objects like arrays, strings, etc.


*/

// Example of For Loop
var names = [
    "Barbie",
    "Ken",
    "Alan"
];
console.log("1 Ex: forI loop");
for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log("2 Ex: For of Loop");
for (const name of names) {
    console.log(name);
}


console.log("3 Ex: For Each");
names.forEach(function(name){
    console.log(name)
});

console.log("4 Ex: While Loop");
var index = 0;
while (index < names.length) {
    console.log(names[index]);
    index = index + 1;
  
}

console.log("5 Ex: Do While Loop");
do {
    console.log("HI");
} while (false);


console.log("6 Ex: Break within Loop");
for (var i = 0; i <= 10; i++){
    console.log(i)
    if (i == 5){
        break;
    }
}

console.log("7 Ex: Continue within Loop");
for (var i = 0; i <= 10; i++){
    if (i < 5){
        continue;
    }
    console.log(i)
}

