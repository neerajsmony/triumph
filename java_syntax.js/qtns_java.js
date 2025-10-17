// 🔢 Operators (20 Questions)

// 1. Add two numbers:
// let a = 10, b = 20; // Output: 30

// let a = 20 
// let b = 10
// console.log(a+b)


// 2. Simple calculator with +, -, *, /, %:
// let num1 = 12, num2 = 4;
// console.log(num1+num2)




// 3. Compare and print larger:
// let x = 7, y = 12; // Use if-else and > operator

// let x = 7
// let y = 12 
// if (x > y) {
//     console.log(x)
// }

// else if (y>x){
    // console.log(y)
// }
// 4. Compare "5" and 5 with == and ===:
// let val1 = "5", val2 = 5;

// if (val1 == val2){
//     console.log('they are equal values')
// }
// if (val1===val2){
//     console.log('eqaul ')
// }
// else {
//     console.log('not eqaul values and datatype')
// }

// 5. Check if number is between 10 and 100 using &&:
// let n = 55;
// if (n>10 && n<100){
//     console.log(n)
// }



// 6. Use || to check if user is adult or has permission:
// let age = 16, hasPermission = true;

// if (age >=18 || hasPermission){
//     console.log('user has permission')
// }
// else {
//     console.log('user is not allowed')
// }

// 7. Find remainder:
// let dividend = 25, divisor = 4;

// let remainder = dividend % divisor;
// console.log(remainder); // Output: 1

// 8. Increment a number:
// let count = 5; count++;

// console.log(count); // Output: 6 

// 9. Decrement a number:
// let items = 10; items--;

// console.log(items); // Output: 9

// 10. Check even/odd using ternary operator:
// let num = 13;

// console.log(num % 2 === 0 ? "Even" : "Odd");

// 11. Difference between != and !==:
// let a = "10", b = 10;

// if (a != b) {
//     console.log("Values are not equal");
// }

// if (a !== b) {
//     console.log("Values are not equal and types are different");
// }

// 12. Check if not divisible by 3:
// let value = 17;!(value % 3 === 0)

// if value % 3 == 0 {
//     console.log("Divisible by 3");
// } else {
//     console.log("Not divisible by 3");
// }

// if (value % 3 !== 0) {
//     console.log("Not divisible by 3");
// }

// 13. Sum using += in loop:
// let sum = 0;

// for (sum = 0;sum <=5;sum++)
// console.log(sum) 


// 14. Double number using *=:
// let value = 2;

// console.log(value*=2)

// 15. Use typeof on variables:
// let a = 10, b = "text", c = true;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))


// 16. Delete object property:
// let person = {name: "John", age: 30}; delete person.age;  // deleting age key from person class 
// console.log(person)



// 17. Use ?? to assign default:
// let userName = null; let name = userName ?? "Guest";

// console.log()

// 18. Use && in assignment:
// let isLoggedIn = true; let dashboard = isLoggedIn && "Show";


// 19. Compare null, undefined, 0:
// let a = null, b = undefined, c = 0;
// if (a===b===c)
// console.log('same ')
// else {
//     console.log('not same')
// }



// 20. Show power using ** and Math.pow():
// let base = 3, exponent = 4;

// console.log(base**exponent)

// console.log(Math.pow(base,exponent))

// ---

// 🔁 Loops – For & While (20 Questions)

// 21. Print 1 to 10 using for:
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
//     document.write("<br>")
// }


// 22. Print even numbers 1–20:
// for (let i = 1; i <= 20; i++) {
//     if (i%2==0){
//     console.log(i)
//     document.writeln(i)
//     document.writeln('<br>')
//     }
// }




// 23. Print odd numbers 1–20 using while:
// let i = 1;
// while (i < 21){
//     if (i%2!=0){
//     console.log(i)
//     document.write(i)
//     document.write('<br>')

//     }
//     i++   
// }



// 24. Multiplication table of 5:
// let n = 5,i=1;

// while(i<=10){
//     console.log(n*i)
//     i++;
// }



// 25. Sum 1 to n using while:
// let i = 1, sum = 0, n = 10;

// while(i<=n){
//     sum++;
//     console.log(sum);
//     i++;
// }

// 26. Factorial of a number:
let n = 5, fact = 1;

console.log()

// 27. Count digits in number:
let num = 12345;

for (i=1;i<=num%10)
num%10
console.log(num)

// 28. Print reverse from 10 to 1:
// for (let i = 10; i >= 1; i--) {}


// 29. Product of first 10 numbers:
// let product = 1;


// 30. Loop through string chars:
// let text = "JavaScript";


// 31. Count vowels in string:
// let str = "Programming";


// 32. Count numbers divisible by 3 (1–50):
// let count = 0;


// 33. Print squares of 1 to 10:
// for (let i = 1; i <= 10; i++) {}


// 34. Check if number is prime:
// let num = 17;


// 35. Reverse digits of number:
// let num = 1234;


// 36. Fibonacci series n terms:
// let n = 10, a = 0, b = 1;


// 37. Sum of digits:
// let num = 456;


// 38. Print perfect squares < 100:
// for (let i = 1; i*i < 100; i++) {}


// 39. Palindrome string check:
// let word = "madam";


// 40. Find GCD of two numbers:
// let a = 12, b = 18;




// ---

// 🔁 Break & Continue (10 Questions)

// 41. Stop loop when number reaches 5:
// for (let i = 1; i <= 10; i++) { if (i === 5) break; }


// 42. Skip even numbers using continue:
// for (let i = 1; i <= 10; i++) { if (i % 2 === 0) continue; }


// 43. Skip vowels in string:
// let str = "JavaScript";


// 44. Break when value found in array:
// let arr = [3, 7, 9, 15, 20];


// 45. Continue if value < 10:
// let arr = [3, 12, 5, 15, 8];


// 46. Find first prime > 50 using break:
// let i = 51;


// 47. Skip 3 and 7 while printing 1 to 10:
// for (let i = 1; i <= 10; i++) {}


// 48. Break nested loops when i + j == 5:
// for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) {} }


// 49. First duplicate in array using break:
// let arr = [1, 3, 5, 3, 7];


// 50. Skip negative numbers using continue:
// let arr = [-5, 2, -3, 4, 0];