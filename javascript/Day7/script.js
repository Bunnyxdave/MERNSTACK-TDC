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

//



