// console.log("hello")

//FUNCTIONS - functions are reusable block of codes that perform specific task
// function definition and calling

// example1:
// function sayHello(){
//     console.log("Hello World")
// }

//example2:
// function greeting(){
//     alert("hello user")
// }

// greeting()

//example3:
// function introduction() {
// console.log("My name is JavaScript");
// console.log("I was created in 1995");
// console.log("I run in browsers");
// }
// introduction();

//FUNCTIONS WITH ARGUMENTS:

// function greet (username){
//     alert("hello "+username)
// }
// greet("burhan")

//example2: sum of two numbers:
// function sumOfTwoNum (a, b){
//     let result= a+b
//     // return sumOfTwoNum
//     alert(result)
// }

// sumOfTwoNum(12,13)

// example3:
// calculate avg pf three num
// function avg(a, b, c){
//     let result=(a+b+c)/3

//     console.log(result)
// }

// avg(12, 13 , 1)

//example4:
//Create personalized messages
// function message(name, age, place){
//     console.log("Hi! "+name,"you are " +age, "years old", "and you live in "+place  )
// }

// message("burhan", 22, "hyd")

//example4: code after return never runs

// function add(a, b){
//     let result=a+b
//     return result
//     console.log(result) <--- didnt run
// }

//example5:
//return-string
// function greeting(name){
//     return "burhan" +name

// }

//example problem function for converting celcius to farenheit
// function tempurature(C){

//     return (C*9/5) + 32

// }

//UNDERSTANDING THE SCOPE:
// Scope determines where variables can be accessed in your code. Think of it as privacy levels:
// Global Scope: Like a public park - everyone can see it
// Function Scope: Like your house - only people inside can see it
// Block Scope: Like a locked safe inside a room - only accessible from inside

// example1: basic function scope
// function showScore() {
// let score = 100; // Function scope
// console.log(score); // Works!
// }
// showScore(); // Output: 100
// console.log(score); // Error: score is not defined

// Example 2: Each function has its own scope
// function func1(){
//     let x=10
//     console.log(x)
// }

// function func2(){
//     let x=20
//     console.log(x)
// }

//Block Scope: Variables declared with let or const inside curly braces {} cannot be accessed outside.

//if (true) {
// let temp = 42;
// console.log(temp); // Works: 42
// }
// console.log(temp); // Error: temp is not defined

//Example 4: Block scope with loops
// for (let i = 0; i < 3; i++) {
// console.log(i); // 0, 1, 2
// }
// console.log(i); // Error: i is not defined

// block scope with curly braces
// {
// let secret = "Hidden";
// console.log(secret); // Works: Hidden
// }
// console.log(secret); // Error: secret is not defined

//LEXICAL SCOPE

//inner function accessing outer function
// function outer() {
// let x = 5;
// function inner() {
// console.log(x); // Inner can see 'x'
// }
// inner();
// }
// outer(); // Output: 5

// Example 2: Multiple levels of nesting

// function level1() {
// let a = 10;
// function level2() {
// let b = 20;
// function level3() {
// console.log(a);
// console.log(b);
// }
// level3();
// }
// level2();
// }
// level1();

// Example 3: Outer cannot access inner variables

// function outer() {
// function inner() {
// let secret = "Hidden";
// }
// inner();
// console.log(secret); // Error: secret is not defined
// }
// outer();

//example 4:
// function greet(name) {
// function createMessage() {
// return "Hello, " + name;
// }
// console.log(createMessage());
// }
// greet("Alice");

// --------- FUNCTION EXPRESSION-------------

// BASIC
// const multiply = function(a, b) {
// return a * b;
// };
// console.log(multiply(4, 5));
// console.log(multiply(10, 3));

// let functionName = function(){
//     for(let i= 1; i<=10; i++){
//     console.log("hello burhan")
// }
// }

// functionName()

//example: password strength checker
// let passwordChecker = function () {
//     let pwd = prompt("Enter the password");

//     if (
//         pwd.length >= 8 &&
//         /[A-Z]/.test(pwd) &&
//         /[0-9]/.test(pwd) &&
//         /[@!#$%^&*()]/.test(pwd)
//     ) {
//         alert("Password is strong");
//     } else {
//         alert("Nalla password hai, change kar 😄");
//     }
// };

// passwordChecker();

// Example 2: Function expression with greeting
// const sayHi = function(name) {
// console.log("Hi, " + name + "!");
// };
// sayHi("Tom");
// sayHi("Sarah");

// Example 3: arrow functions

// const square = (num) => {
// return num * num;
// };
// console.log(square(5)); // Output: 25
// console.log(square(10)); // Output: 100

//---------------->ARROW FUNCTION---------------------

// let greeting = (txt) =>{
//     console.log("hello "+txt)
// }

// greeting("buhran")

//addition arrow-function
// let add =(a,b) => {
//     let result =a+b
//     return result
// }

// let result = add(23,34)
// console.log(result)

//---> even shorter version

// let add = (a,b) => a+b

// let result = add(90,0)
//     console.log(result)

// arrow function for multiplicatiom

// let mul = (a,b) => a*b
//     let product = console.log(mul(2,5))

//-----------HIGHER ORDER FUNCTIONS:
// FUNCTIONS that accepts other fnctions as inputs, arguments or returns a functions called as higher order functions

// example1:
// let repeatTask = function (a) {
//   for (let i = 1; i <= a; i++) {
//     greeting();
//   }
// };

// let greeting = function () {
//   console.log("hello");
// };

// repeatTask(9)

// example2:
// function applyDiscount(price, discountFunc) {
// return discountFunc(price);
// }
// const tenPercent = (price) => price * 0.9;
// const twentyPercent = (price) => price * 0.8;
// console.log(applyDiscount(100, tenPercent));
// console.log(applyDiscount(100, twentyPercent)); 

