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



