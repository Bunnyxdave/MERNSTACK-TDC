//PRACTICE ASSIGNMENT-1 - DIVISIBILITY CHECK
//CREATE A VARIABLE NUM, PRINT "GOOD" IF DIVISIBLE BY 10, ELSE "BAD".

// let num = 100;

// if(num%10===0){
//     console.log("GOOD"); // if divisible by 10 then "good"
// }
// else{
//     console.log("BAD");// if not divisible by 10 "bad"
// }


//PRACTICE ASSIGNMENT-2 - use prompt for name and age. display alerts to show "name" is "age" years old

// let username=prompt("what os your name:")
// let age=prompt("what is ur age:")

// alert(`${username} is ${age} years old.`)

//PRACTICE ASSIGNMENT - 3 - QUATERLY MONTHS - USING SWITCH STATEMTNS

// let quater=prompt("enter the quater of the year:")

// switch(quater){
//     case "1" :
//     console.log("january, february, march");
//     break;
//     case "2" : 
//     console.log("april, may, june")
//     break;
//     case "3":
//     console.log("july, august, september ")
//     break;
//     case "4":
//     console.log("october, november, december")
//     break;
//     default:
//         console.log("invalid input")
// }


//PRACTICE ASSIGNMENT - 4 GOLDEN STIRNG IF STARTS WITH A/a AND HAS LENGTH>5
// let str = "Apple";

// if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
//     console.log("Golden String");
// } else {
//     console.log("Not a Golden String");
// }


//PRACTICE ASSIGNMENT - 5 FINDING THE LARGEST NUMBER

// let num1=prompt("enter the first number:")
// let num2=prompt("enter the second number:")
// let num3=prompt("enter the third number:")

// if(num1>num2){
//     alert(`${num1} is the largest.`)
// } else if(num2>num3){
//     alert(`${num2} is the largest.`)
// }
// else {
    
//     alert(`${num3} is the largest.`)
// }


//------------------------------------------------------------------------------------------//


//notes

// let age=18;

// if (age>=18){
//     console.log("you are eligible for voting")
// }

// //temp. check
// let temperature = 35;
// if (temperature > 30) {
// console.log("It's hot outside!");
// }
// // Output: It's hot outside!


//result gradeb system
// let score = 75;
// if (score >= 90) {
// console.log("Grade: A+");
// } else if (score >= 75) {
// console.log("Grade: A");
// } else if (score >= 60) {
// console.log("Grade: B");
// } else if (score >= 33) {
// console.log("Grade: C");
// }


//traffic speed check
// let speed = 85;
// if (speed > 100) {
// console.log("Severe speeding - Heavy fine");
// } else if (speed > 80) {
// console.log("Speeding - Warning");
// } else if (speed > 60) {
// console.log("Normal speed");
// }


// //if one condition is true rest are skipped 
// let num = 50;
// if (num > 10) {
// console.log("Greater than 10"); // This executes
// } else if (num > 30) {
// console.log("Greater than 30"); // This is skipped (even though true)
// } else if (num > 40) {
// console.log("Greater than 40"); // This is also skipped
// }
// // Output: Greater than 10


//Voting Eligibility
// let age = 16;
// if (age >= 18) {
// console.log("You can vote");
// } else {
// console.log("You cannot vote yet");
// }
// // Output: You cannot vote yet


//even or odd number using if-else
//     let number = 7;
// if (number % 2 === 0) {
// console.log("Even number");
// } else {
// console.log("Odd number");
// }
// // Output: Odd number


//login system
// let username = "admin";
// let password = "1234";
// if (username === "admin" && password === "1234") {
// console.log("Login successful!");
// } else {
// console.log("Invalid credentials");
// }
// // Output: Login successful!


//NESTED IF-ELSE
//exam result example
// let marks = 85;
// if (marks >= 33) {
// if (marks >= 80) {
// console.log("Outstanding");
// } else {
// console.log("Pass");
// }
// } else {
// console.log("Better luck next time!");
// }
// // Output: Outstanding

// 1. First checks: marks >= 33 → true (85 >= 33)
// 2. Enters outer if block
// 3. Then checks: marks >= 80 → true (85 >= 80)
// 4. Prints "Outstanding"


//number classification 
// let num = 15;
// if (num > 0) {
// if (num % 2 === 0) {
// console.log("Positive even number");
// } else {
// console.log("Positive odd number");
// }
// } else if (num < 0) {
// console.log("Negative number");
// } else {
// console.log("Zero");
// }
// // Output: Positive odd number


//LOGICAL OPERATORS

//AND operator

//DRIVER ELIGIBILITY
// let age = 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
// console.log("Can drive");
// } else {
// console.log("Cannot drive");
// }
// // Output: Can drive
// // Both conditions are true: 25 >= 18 (true) AND hasLicense (true)


//LOGIN VALIDATION 
//let username = "admin";
// let password = "secret";
// if (username === "admin" && password === "secret") {
// console.log("Access granted");
// } else {
// console.log("Access denied");
// }
// // Output: Access granted

//OR operator
