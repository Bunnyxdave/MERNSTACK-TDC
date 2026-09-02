//DAY 8 OF PRACTICING JS
//this - keyword is a special keyword that refers to an onject that is executing the current function. It can be used to access properties and methods of the object. Think of it like the word "My" in conversation - its meaning changes based on who is speaking.

// example:
// let student={
//     name: "ahmed",
//     age:22,
//     greet: function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// student.greet();

//In the example above, the greet method uses the this keyword to access the name and age properties of the student object. When we call student.greet(), the this keyword refers to the student object, so it correctly outputs "Hello, my name is ahmed and I am 22 years old."

//Another example:
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName()); // Output: "John Doe"

//example 3:
// let marksheet ={
//     studentName: "Ali",
//     studentAge: 20,
//     english:67,
//     math:89,
//     physics: 78,
//     average: function(){
//         let total = this.english + this.math + this.physics;
//         let avg = console.log(total/3);
//         return avg
//     }
// }

// marksheet.average()

//example 4:
// let bankAccount = {
//   accountHolder: "Sarah",
//   balance: 6000,
//   deposite: function (amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
//   },
// };

// bankAccount.deposite(2000); // Output: Deposited 2000. New balance is 8000.

// example 5:
// let cart = {
//     items:["apple","banana", "mango"],
//     total:500,
//     additem: function (item, total){
//         this.items.push(item)
//         this.total+=this.total
//         console.log(this.items, this.total)
//     }
// }

// cart.additem("orange")
// cart.additem("grapes")
// cart.additem("cherry")
// cart.additem("papaya")

// ----------------EXCEPTION HANDLING------------

// Errors are inevitable in programming. Without proper handling, a single error can crash your entire program.
// The try-catch statement lets you handle errors gracefully.
// Real-World Analogy: The Trapeze Artist
// Code Execution = The trapeze artist performing stunts high up
// Error = The artist slipping and falling
// catch Block = The safety net that catches them, allowing the show to continue

// example:1
// console.log("program");
// try {
//   console.log(undefinedVariable); //this will throw a reference error
// } catch (err) {
//   console.log("there is something wrong with it");
// }

// console.log("program executed");

// // example:
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("cannot divide by zero"); //using throw keyword we can create our own error and throw it to the catch block 
//     } else {
//       let result = a / b;
//       console.log(result);
//     }
//   } catch (err) {
//     console.log("error occured: ", err.message);
//   }
// }


//example:
// function user_Age(age){
//     try{
//         if(age<0){
//         throw "Age cannot be negetive"
//             }else if(age>150){throw "buddha hai kya bkl"}
//             console.log(age)
//     }catch(err){
//             console.log("error occured:", err)
//     }
// }

// --------- TIMING EVENTS---------------
// setTimeout --- executes the code once
// setInterval --- repeats the executions with some time interavl

//example1:

// function greet(){
//     console.log("hello world")
// }
// //setTimeout(callback, delay in Ms)
// setTimeout(greet, 3000)

// example:2
// setTimeout( ()=>{console.log("hola amigo")}, 5000)

// example3:
// console.log("starting...")

// setTimeout( ()=> {console.log("this begin in 4 sec..")}, 4000)

// console.log("ends")

//setInterval() runs a function repeatedly at specified intervals.

//setInterval(callback, time in MS)

// setInterval(()=>{console.log("hello bitch")}, 2000)
