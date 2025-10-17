// 1. JavaScript - Home, Roadmap, Overview, Features
// =============================================================================
// 🔹 What is JavaScript?
// JavaScript is a high-level, interpreted scripting language.
// It is one of the core technologies of the web (along with HTML and CSS).
// Initially used for client-side scripting in browsers
// but now also used server-side (Node.js).

// 🔹 Roadmap (Learning Path)
// Basics: Variables, Data Types, Operators
// Control Flow: Conditions, Loops
// Functions: Declarations, Expressions, Arrow Functions
// DOM Manipulation: Accessing and updating HTML
// Events: Handling user actions
// ES6+: let/const, arrow functions, promises
// Asynchronous JS: Callbacks, Promises, Async/Await
// Advanced Topics: Closures, Hoisting, Scope, Classes, Modules

// 🔹 Key Features
// Lightweight, interpreted
// Cross-platform
// Prototype-based OOP
// Dynamic typing
// Event-driven and asynchronous
// Supports functional and object-oriented styles

// 2. Enabling JavaScript in Browsers
// =============================================================================
// JavaScript is typically enabled by default.
// You can check or enable it manually through:
// Chrome: Settings > Privacy and security > Site Settings > JavaScript
// Firefox: Type about:config, search for javascript.enabled

// 3. Placement of JavaScript
// =============================================================================
// JavaScript can be placed in:
// Inline: Inside HTML elements (<button onclick="alert('Hi')">)
// Internal: Inside <script> tag in the same HTML file
// External: Linked .js file via <script src="script.js"></script>

// 📌 Best Practice: Place <script> at the end of body tag or use 
// defer for loading scripts after HTML parsing.

// 4. Syntax
// =============================================================================
// Case-sensitive
// Semicolon ; is optional but recommended
// Curly braces {} for block grouping
// Comments:
// Single-line: // comment
// Multi-line: /* comment */

// 5. Hello World
// =============================================================================
// Internal Script Example:
// <script>
//   alert("Hello, World!");
// </script>

// External File (hello.js):
// console.log("Hello, World!");
// Link:
// <script src="hello.js"></script>

// 6. Console.log()
// =============================================================================
// Used to print/debug messages in browser console.

// console.log("This is a log message");
// Types:
// console.error("Error!");
// console.warn("Warning!");
// console.info("Info");

// 7. Comments
// =============================================================================

// // Single-line comment
// /* 
//    Multi-line
//    comment 
// */

// 8. Variables: var, let, const
// =============================================================================
// 🔹 var
// Function-scoped
// Can be re-declared and updated
// Hoisted (declared at the top)

// 🔹 let
// Block-scoped
// Cannot be re-declared in same scope
// Can be updated
// let age = 25;
// age = 30;

// 🔹 const
// Block-scoped
// Cannot be re-declared or updated
// Must be initialized
// const name = "Rohini";
// // name = "Alex"; ❌ Error

// 9. Data Types
// =============================================================================
// 🔹 Primitive
// Number, String, Boolean, Undefined, Null, Symbol, BigInt

// 🔹 Non-Primitive
// Object, Array, Function


// let age = 30;                // Number
// let name = "Rohini";         // String
// let isStudent = true;        // Boolean
// let x;                       // Undefined
// let y = null;                // Null
// let id = Symbol('id');       // Symbol
// let bigNum = 12345678901234567890n; // BigInt

// 10. Type Conversions
// 🔹 String to Number
// Number("123")  // 123
// parseInt("10") // 10
// parseFloat("10.5") // 10.5

// 🔹 Number to String
// String(100)  // "100"
// (100).toString()

// 🔹 Boolean Conversion
// Boolean(1)   // true
// Boolean(0)   // false
// Boolean("")  // false
// Boolean("hi") // true

// 11. Strict Mode
// =============================================================================
// 🔹 Use "use strict"; at the top of your code or function
// Makes code run in strict mode, catching silent errors
// "use strict";
// x = 3.14; // Error: x is not declared

// 12. Reserved Keywords
// =============================================================================
// These cannot be used as variable names:
// break, case, catch, class, const, continue, debugger,
// default, delete, do, else, export, extends, finally,
// for, function, if, import, in, instanceof, let, new,
// return, super, switch, this, throw, try, typeof,
// var, void, while, with, yield





// 1. JavaScript - Operators 
// =============================================================================
// Operators are symbols used to perform operations on operands (variables and values).

// 🔹 Operator Categories:
// =============================================================================
// Type	            Examples
// Arithmetic	        + - * / % ++ -- **
// Comparison	        == === != !== > >= < <=
// Logical	            `&&
// Bitwise	            `&
// Assignment	        = += -= *= /= %= **=
// Conditional	        condition ? expr1 : expr2
// typeof	            typeof x
// Nullish	            ??
// Delete	            delete obj.prop
// Comma	            expr1, expr2
// Grouping	        ( ... )
// Yield	            yield in generators
// Spread/Rest	        ...
// Exponentiation	    **

// 2. Arithmetic Operators
// =============================================================================
// let a = 10, b = 3;
// a + b     // 13
// a - b     // 7
// a * b     // 30
// a / b     // 3.333...
// a % b     // 1 (remainder)
// a ** b    // 1000 (exponentiation)

// 🔹 Increment / Decrement:
// =============================================================================
// let x = 5;
// x++; // 6
// console.log(x)
// ++x; // 7
// console.log(x)
// x--; // 6

// 3. Comparison Operators
// =============================================================================
// Used for comparing values.
// console.log(5 == "5" )     // true (type conversion)
// console.log(5 === "5")     // false (strict equality)
// console.log(5 != "5" )     // false
// console.log(5 !== "5")     // true
// console.log(5 > 3    )     // true
// console.log(5 < 3    )     // false
// console.log(5 >= 5   )     // true

// 4. Logical Operators
// =============================================================================
// let x = true, y = false;

// x && y       // false (AND)
// x || y       // true  (OR)
// !x           // false (NOT)


// 5. Bitwise Operators
// =============================================================================
// Operates on binary values.
// Operator	Symbol	    Description
// AND	            &	    1 if both bits 1
// OR	            |	    
// XOR	            ^	    1 if bits differ
// NOT	            ~	    Inverts bits
// Left Shift	    <<	    Moves bits left
// Right Shift	    >>	    Moves bits right
// Zero-fill right	>>>	    Like >>, but zero-fill


// 5 & 1     // 1   → 0101 & 0001 = 0001
// 5 | 1     // 5   → 0101 | 0001 = 0101
// 5 ^ 1     // 4
// ~5        // -6

// 6. Assignment Operators
// =============================================================================
// let a = 10;
// a += 5;   // a = a + 5 → 15
// a -= 2;   // 13
// a *= 2;   // 26
// a /= 2;   // 13
// a %= 4;   // 1
// a **= 2;  // 1 → (1^2)


// 7. Conditional (Ternary) Operator
// =============================================================================
// let age = 18;
// let status = (age >= 18) ? "Adult" : "Minor";


// 8. typeof Operator
// =============================================================================
// Returns the data type of a variable.
// typeof 42         // "number"
// typeof "Hello"    // "string"
// typeof true       // "boolean"
// typeof undefined  // "undefined"
// typeof null       // "object" ❗ (historical bug)
// typeof {}         // "object"
// typeof []         // "object"
// typeof function(){} // "function"


// 9. Safe Assignment
// =============================================================================
// Used with short-circuiting to assign only if value is valid.

// let input;
// let name = input || "Default"; // assigns "Default" if input is falsy
// let name2 = input ?? "Guest";  // only if input is null or undefined

// 10. delete Operator
// =============================================================================
// Deletes object property or array element (leaves undefined in array).
// let person = {name: "Rohini", age: 25};
// delete person.age;   // person = {name: "Rohini"}

// 11. Exponentiation Operator **
// =============================================================================
// 2 ** 3; // 8


// Operator Precedence
// =============================================================================
// Determines the order in which operations are performed.

// Precedence	        Operators
// 1   ()              Grouping
// 2	                Member access . or []
// 3	                Function calls ()
// 4	                new
// 5	                ++, --
// 6	                !, typeof, delete
// 7	                **
// 8	                *, /, %
// 9	                +, -
// 10	                <<, >>, >>>
// 11	                <, <=, >, >=
// 12	                ==, !=, ===, !==
// 13	                &, ^, `
// 14	                &&, `
// 15	                ? :
// 16	                =, +=, -= etc.
// 17	                , Comma






// 1. Control Flow in JavaScript
// =============================================================================
// Control flow lets you decide which code runs based on conditions.

// 🔹 if, else if, else Statement
// Syntax:
// if (condition) {
//   // block of code if condition is true
// } else if (anotherCondition) {
//   // runs if the previous condition is false and this one is true
// } else {
//   // runs if none of the above conditions are true
// }


// Example:
// let score = 85;

// if (score >= 90) {
//   console.log("A grade");
// } else if (score >= 75) {
//   console.log("B grade");
// } else {
//   console.log("C grade");
// }


// 🔹 switch Statement
// Syntax:
// switch (expression) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   default:
//     // code block
// }

// Example:
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Unknown Day");
// }
// 🔸 break exits the switch block. Without it, fallthrough occurs (next case runs too).


// 2. Loops in JavaScript
// =============================================================================
// Loops are used to execute a block of code multiple times.

// 🔹 while Loop
// Syntax:
// while (condition) {
//   // code runs while condition is true
// }

// Example:
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// 🔹 do...while Loop
// Executes at least once, then checks condition.
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// 🔹 for Loop
// Syntax:
// for (initialization; condition; increment) {
//   // block of code
// }

// Example:
// for (let i = 0; i < 5; i++) {
//   console.log("Count:", i);
// }

// 🔹 for...in Loop
// Used to iterate over object properties.
// let person = {name: "Rohini", age: 26};

// for (let key in person) {
//   console.log(key, person[key]);
// }
// 🔸 Also works with arrays but not recommended due to index order inconsistency.

// 🔹 for...of Loop
// Used to iterate over iterable objects (arrays, strings, etc.)
// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }
// 🔸 Doesn’t work on plain objects (use for...in for them).


// 3. Loop Control Statements
// =============================================================================
// 🔹 break
// Exits the loop immediately.
// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   console.log(i);  // prints 0 to 4
// }

// 🔹 continue
// Skips current iteration and goes to the next.
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);  // skips 2
// }






// 2. JavaScript Regular Expressions
// =============================================================================
// A Regular Expression (or RegEx) is a powerful pattern-matching tool 
// used for searching, extracting, and validating string data.
// In JavaScript, regular expressions are represented by either:
// A literal notation: /pattern/flags
// The RegExp object: new RegExp("pattern", "flags")

//  Basic Syntax
// =============================================================================
// Symbol	    Meaning	                                Example
// [abc]	    Any one character a, b, or c	        /[abc]/
// [a-z]	    Any lowercase letter from a to z	    /[a-z]/
// [A-Z]	    Any uppercase letter	                /[A-Z]/
// \d	        Any digit (0–9)	                        /\d/
// \w	        Any word character (a-z, A-Z, 0-9, _)	/\w/
// .	        Any character except newline	        /./
// ^	        Start of the string	                    /^a/
// $	        End of the string	                    /z$/
// +	        One or more of preceding	            /a+/
// *	        Zero or more of preceding	            /a*/
// ?	        Zero or one (optional)	                /colou?r/
// {n}	        Exactly n times	                        /\d{3}/
// {n,}	        n or more times	                        /\d{2,}/
// {n,m}	    Between n and m times	                /\d{2,4}/

// A. match()
// =============================================================================
// Returns an array of matches or null if no match found.

// 🔸 Example:
// let text = "My 9876542220 phone number is 9876543210";
// let result = text.match(/\d{10}/);
// console.log(result[0]);  // Output: "9876543210"
// console.log(result[1]);  // Output: "9876543210"
// console.log(result);
// Returns the first match by default. Use /g flag for all matches.

// B. test()
// =============================================================================
// Tests whether a pattern exists in a string. Returns true or false.

// 🔸 Example:
// let pattern = /^[A-Z][a-z]+$/;
// console.log(pattern.test("John"));   // true
// console.log(pattern.test("john"));   // false


// Pattern Examples:
// 🔹 1. Check if string contains digits:
// let hasDigits = /\d/;
// console.log(hasDigits.test("abc123"));  // true

// 🔹 2. Validate email format:
// let email = "user@example.com";
// let emailPattern = /^[\w.-]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/;
// console.log(emailPattern.test(email));  // true

// 🔹 3. Match all words in a sentence:
// let sentence = "JavaScript is awesome!";
// let words = sentence.match(/\w+/g);
// console.log(words);  // ["JavaScript", "is", "awesome"]


// Flags Used in RegEx
// =============================================================================
//  Flag	    Description
//   g	        Global – match all occurrences
//   i	        Ignore case
//   m	        Multi-line mode

// 🔸 Example with flags:
// let str = "JS is fun. js is powerful.";
// let matches = str.match(/js/gi);  // ['JS', 'js']
// console.log(matches);


// Practice Tasks:
// =============================================================================
// 🔹 Validate a 10-digit phone number:
// let phone = "9876543210";
// let isValid = /^\d{10}$/.test(phone);
// console.log(isValid); // true


// 🔹 Extract all capital words from a sentence:
// let data = "HELLO world, WELCOME to JAVASCRIPT";
// let caps = data.match(/\b[A-Z]+\b/g);
// console.log(caps); // ["HELLO", "WELCOME", "JAVASCRIPT"]







// 3. Exception Handling in JavaScript
// // =============================================================================
// JavaScript uses exception handling to catch and 
// manage errors gracefully without crashing the program. 
// The main components are:
// try
// catch
// finally
// throw

//  Why Exception Handling?
// // =============================================================================
// To handle errors in a clean, 
// controlled way without breaking user experience 
// or crashing the application.

// Example of an uncaught error:
// // =============================================================================
// let result = 10 / 0;
// console.log(result)        // OK (Infinity)
// let name = user.name;       // ❌ ReferenceError: user is not defined
//  1. try – Block to test for errors
//  2. catch – Executes if an error is thrown
//  3. finally – Always executes (optional)
//  4. throw – Manually generate custom errors
//  Syntax:

// try {
//   // code that may throw an error
// } catch (error) {
//   // code to handle the error
// } finally {
//   // (optional) cleanup code, always runs
// }

// 🔸 Example 1: Basic try-catch
// try {
//   let x = y + 5; // y is not defined
//   console.log("no error")
// } catch (err) {
//     console.log(err)
//   console.log("Error caught:", err.message);
// }
// 🔹 Output:
// Error caught: y is not defined


// 🔸 Example 2: Using finally
// try {
//   console.log("Start of try");
//   let result = 10 / a;
//   console.log("Result is", result);
// } catch (err) {
//   console.log("Error:", err.message);
// } finally {
//   console.log("This will run always.");
// }
// 🔹 Output:
// Start of try  
// Result is 5  
// This will run always.


//  throw – Manually Raise an Error
// // =============================================================================
// You can throw your own error using the throw keyword. 
// This is useful in validations or custom error messages.
// function divide(a, b) {
//   if (b === 0) {
//     throw "Division by zero not allowed!";
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// //   console.log("code trying")
// } catch (e) {
//   console.log("Caught error:", e);
// }
// finally{
//     console.log("code executed")
// }


//  Throw with Error Object (Best Practice)
// // =============================================================================
// throw new Error("Something went wrong");

// 🔸 Example 3: Form Input Validation with throw
// function checkAge(age) {
//   if (isNaN(age)) {
//     throw new Error("Age must be a number");
//   } else if (age < 18) {
//     throw new Error("Underage! Access denied");
//   }
//   return "Access granted";
// }

// try {
//   let result = checkAge("12");
//   console.log(result);
// } 
// catch (err) {
//   console.log("Error:", err.message);
// }
// finally{
//     console.log("code executed")
// }


//  Practice Task:
// // =============================================================================
// function validateEmail(email) {
//   if (!email.includes("@")) {
//     throw new Error("Invalid Email: '@' is missing");
//   }
//   return "Valid email";
// }

// try {
//   let status = validateEmail("userexample.com");
//   console.log(status);
// } 
// catch (error) {
//   console.log("Error:", error.message);
// } 
// finally {
//   console.log("Email check completed.");
// }
