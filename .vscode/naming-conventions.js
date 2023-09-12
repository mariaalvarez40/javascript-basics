/*
Naming Conventions Best Practices

1. Camel Case:
    Start with a lowercase letter.
    Capitalize the first letter of each subsequent word (including the first word of a compound name), without spaces or punctuation.
    Examples: myVariable, calculateTotalPrice, getUserInfo.
    
2. Snake Case:
    Use all lowercase letters.
    Separate words with underscores (_).
    Examples: my_variable, calculate_total_price, get_user_info.
    In addition to choosing between camel case and snake case, you should follow specific conventions for different types of identifiers:

3. Variables & Functions:
    Use descriptive names that reflect the purpose of the variable or function.
    Use verbs for functions (e.g., calculate, get, set) and nouns for variables (e.g., user, total, data).
    Examples: getUserInfo, calculateTotalPrice, loggedInUser.

4. Constants:
    Use all uppercase letters.
    Separate words with underscores (_).
    Examples: MAX_VALUE, API_URL, DEFAULT_OPTIONS.

5. Classes:
    Use Pascal Case (also known as Upper Camel Case).
    Start with an uppercase letter.
    Examples: Person, ProductManager, UserService.

6. Private Members:
    Prefix with an underscore (_) to indicate that they are intended for internal use.
    Example: _privateVariable, _privateFunction.

7. Acronyms:
    Treat acronyms as words in camel case (e.g., xmlHttpRequest, httpRequest, not XMLHTTPRequest).
    File Names:
    Use lowercase letters.
    Separate words with hyphens (-).
    Example: my-module.js, utils.js.
*/ 

var firstName = "Barbie";
var age = 21;
var isFemale = true;
var balance =  100.32;
var dob = new Date(2000, 3, 18);
var person = {};
var empty = undefined;
