/* 
A string in JavaScript is a data type that represents a sequence of characters. 
Strings can be enclosed in single quotes (') or double quotes ("). 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

var movie ="Barbie Movie"
console.log(typeof movie);
console.log(movie.length);
console.log(movie.toUpperCase());
console.log(movie.substring(0,1));

var b = "barbie";
var k = "ken";
console.log(b + " " + k);
console.log(`${b.toUpperCase()} ${k.toUpperCase()}`);