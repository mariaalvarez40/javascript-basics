/*
KEY POINTS 

1. A data structure that allows you to store and organize multiple values 
    of different data types in a single variable. 
2. JavaScript arrays are zero-indexed, which means the first element is at index 0, 
    the second at index 1, and so on.
3. Elements within array can be accessede by it's index 

*/

var names = ["Barbie", "Ken",  "Alan"];
console.log(names[1]);

//Modify 
names[1] = "Original Barbie";
console.log(names);

//Add  
names.push("pink");
console.log(names);

//Iterate through an array 
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
