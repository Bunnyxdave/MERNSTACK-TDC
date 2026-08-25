//DAY6 = OBJECT LITERALS IN JS
// let student1 = {
//     name : "burhan",
//     age : 22,
//     address : "malakpet" 

// }

// console.log(student1)


// example2: product object

// let garnier = {
//     name : "face-wash",
//     price: 99,
//     mfg_date: "15-3-2020",
//     exp_date: "15-2-2021"

// }

// console.log(garnier.exp_date)

// // Example 3: Book object
// let book = {
// title: "JavaScript Guide",
// author: "John Doe",
// pages: 350,
// published: 2024
// };





// //ACCESSING OBJECT PROPERTIES 
//using dot notation
// let shahruk = {
//     name: "shahruk",
//     age:22,
//     height: 6.2
// }


// console.log(shahruk.age)
// console.log(shahruk.name)
// console.log(shahruk.height)


//using brackets
// let student ={
//     name:"ali",
//     age: 33,
//     lives_in: "hyd",
//     isMuslim: true,
// }

// console.log(student["age"], student["lives_in"], student["isMuslim"])

//MODIFYING OBJECTS:
//updating property
//example1
// let book ={
//     name: "The art of not giving a word",
//     author: "john doe",
//     price: 99
// }

// book.price=999

// console.log(book)


//example2 
// let product = { name: "Phone", price: 30000 };
// product.price = 28000; // Update
// product.brand = "Samsung"; // Add
// delete product.name; // Delete
// console.log(product); // { price: 28000, brand: "Samsung" } 


//Nested Objects (Object of Objects)
// Example 1: Basic nested objects
// let userDatabase = {
// user1: { name: "Alice", grade: "A+", city: "Austin" },
// user2: { name: "Bob", grade: "B", city: "Denver" }
// };
// console.log(userDatabase.user1.name); // "Alice"
// console.log(userDatabase.user2.grade); // "B"


// Example 2: Company departments
// let company = {
// engineering: { employees: 50, manager: "John" },
// sales: { employees: 30, manager: "Sarah" },
// hr: { employees: 10, manager: "Mike" }
// };
// console.log(company.engineering.employees); // 50
// console.log(company.sales.manager); // "Sarah"


//Array of Objects
//example1
// Example 1: List of students
// let students = [
// { name: "Alice", age: 20, grade: "A" },
// { name: "Bob", age: 21, grade: "B" },
// { name: "Charlie", age: 19, grade: "A+" }
// ];
// console.log(students[0].name); // "Alice"
// console.log(students[1].grade); // "B"
// console.log(students.length); // 3


//example2
// Example 2: Product catalog
// let products = [
// { id: 101, name: "Laptop", price: 45000 },
// { id: 102, name: "Mouse", price: 500 },
// { id: 103, name: "Keyboard", price: 1500 }
// ];
// console.log(products[0].name); // "Laptop"
// console.log(products[2].price); // 1500

// Example 3: Social media posts
// let posts = [
// { username: "user1", content: "Hello World!", likes: 50 },
// { username: "user2", content: "JavaScript is fun", likes: 120 },
// { username: "user3", content: "Coding daily", likes: 85 }
// ];
// console.log(posts[1].username); // "user2"
// console.log(posts[0].likes); // 50

//-----------------------------------------------------------------------------

// The Math Object - Introduction

// // Example 1: Math constants
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045

// // Example 2: Absolute value
// console.log(Math.abs(--42)); // 42
// console.log(Math.abs(15)); // 15
// console.log(Math.abs(--7.5)); // 7.5

// // Example 3: Power (exponentiation)
// console.log(Math.pow(2, 3)); // 8 (23)
// console.log(Math.pow(5, 2)); // 25 (52)
// console.log(Math.pow(10, 3)); // 1000 (103)

// // Example 4: Rounding down and up
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(4.1)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5

// // Example 5: Using Math.PI for calculations
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(circumference); // 31.41592653589793
// console.log(area); // 78.53981633974483

//Math.random() - Generating Random Numbers

// // Example 1: Basic random decimal
// console.log(Math.random()); // 0.6472... (different each time)
// console.log(Math.random()); // 0.2851...
// console.log(Math.random()); // 0.9234...

// // Example 2: Random decimal scaled to 10
// let num = Math.random() * 10;
// console.log(num); // 4.637... (between 0 and 10)

// // Example 3: Random decimal scaled to 100
// let percentage = Math.random() * 100;
// console.log(percentage); // 73.245... (between 0 and 100)

// // Example 4: Multiple random numbers
// console.log(Math.random() * 5); // 0 to 5
// console.log(Math.random() * 20); // 0 to 20
// console.log(Math.random() * 50); // 0 to 50


