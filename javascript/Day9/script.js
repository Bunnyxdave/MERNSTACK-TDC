// console.log("Day 9 of js.");

//Modern Array Methods & ES6 Features

//-----.foreach() method-------

// forEach executes a function once for each element in an array. It's like a modern replacement for the traditional
// for loop.

//example1:
// let numbers =[1,2,3,4,5,6]
// numbers.forEach((number)=>{
//     console.log(number)
// })

//example2: add price sumbol
// let price =[100,120,22,233]
// price.forEach((elem)=>{
//     console.log("$",elem)
// })

//example3: print with s.no
// let fruitsDict =["apple","banana","mango","orange","grapes"]
// fruitsDict.forEach((fruits,index)=>{
//     console.log(`${index+1} ${fruits}`)
// })

//example:4 calculate total for each
// let arr =[10,20,30,44,45,67,88,98]
// let total =0
// arr.forEach((elem)=>{
//     total =total+ elem

// })
// console.log(total)

//example:5 capitalize whole array
// let fruits =["apple","banana","mango","orange","grapes"]
// let capitalarr=[]
// fruits.forEach((elem)=>{
//    capitalarr.push(elem.toUpperCase())
// })
// console.log(capitalarr)

// example6:printing object properties
// let employees=[
//     {name:"aziz", age: 23,salary:55000},
//     {name:"dogla pathan", age: 34,salary:155000},
//     {name:"shakir mittha", age: 20,salary:5000},
//     {name:"khuddi kumar", age: 21,salary:45000}
// ]

// employees.forEach((elem)=>{

//     console.log(`hi ${elem.name}, you are ${elem.age} years old and your salary is ${elem.salary}`)

// })

//  Problem 3: Price Tag Filter (Advanced)Scenario: You run an e-commerce store and want to find items that qualify for "Luxury Pricing" (anything over $100). You also want to print out where they sit in your inventory.
//  Task: Iterate through the prices array. If a price is greater than 100, push it into the luxuryPrices array. Simultaneously, print a message to the console for every item stating: "Item at index X costs $Y".

// const prices = [45, 120, 85, 200, 15];
// const luxuryPrices = [];

// // Your code here
// prices.forEach((elem) => {
//     if (elem > 100){
//         luxuryPrices.push(elem)
//     }
// })
// console.log(luxuryPrices); // Expected output: [120, 200]
// // Should also log 5 sentences to the console showing indices 0 through 4.

// Problem 4: Email List Extractor (Warm-up)
// Scenario: You have a list of user profile objects. You need to pull out just their email addresses to send a marketing newsletter.

// const users = [
//   { name: "Sam", email: "sam@example.com" },
//   { name: "Alex", email: "alex@example.com" },
//   { name: "Taylor", email: "taylor@example.com" }
// ];

// const emailList = [];

// users.forEach((elem)=>{
//     console.log(elem.email)
// })

// Problem 5: Inventory Restock Alert (Intermediate)
// Scenario: You manage a grocery store inventory. You need to flag items that are running low (fewer than 5 units left) so you can reorder them

// const inventory = [
//   { item: "Apples", qty: 12, needsRestock: false },
//   { item: "Bananas", qty: 2, needsRestock: false },
//   { item: "Oranges", qty: 0, needsRestock: false },
//   { item: "Milk", qty: 7, needsRestock: false }
// ];

// inventory.forEach((elem)=>{
//     if(elem.qty<5){
//         elem.needsRestock=true
//         console.log(elem.item + ": only few items left")
//     }
// })

// console.log(inventory)

// Problem 6: The Alternating Operator (Advanced)
// Scenario: You are building a math puzzle game. You need to process an array of numbers by adding the numbers at even indices and subtracting the numbers at odd indices.

// const numbers = [10, 5, 20, 15, 30, 25];
// let result = 0;

// numbers.forEach((num, index) => {
//   if (index % 2 === 0) {
//     result += num; // Add numbers at even indices
//   } else {
//     result -= num; // Subtract numbers at odd indices
//   }
// });

// console.log(result); // Expected output: 15

// ----------.map() method-------
// map creates a new array by transforming each element. It "maps" each input to an output.

// example1:
// let num=[1,2,3,4,5,6]
// let updatedNum=num.map((elem)=>{
//     return elem*2
// })

// console.log(updatedNum)

// example2: exxtract properties from objects
// let students = [
//     {name:"burhan",age:22},
//     {name:"john", age:23},
//     {name:"shark", age:20}
// ]

// let namarr=students.map((elem)=>{
//     return elem.name
// })
// console.log(namarr)

//example3:
// let prices = [100, 200, 150];
// let pricesWithTax = prices.map((price) => price * 1.18);
// console.log(pricesWithTax); // [118, 236, 177]

// example4
// const names = ["Alice", "Bob", "Charlie"];
// const nameLengths = names.map((name) => name.length);
// console.log(nameLengths); // [5, 3, 7]

//example5
// const words = ["Hello", "Good", "Morning"];

// const result = words.map((word) => {
//   return word + "!";
// });

// console.log(result);
// // ["Hello!", "Good!", "Morning!"]

// example6 convert num to string
// const numbers = [1, 2, 3, 4, 5];
// let stringNumbers = numbers.map((num) => num.toString());
// console.log(stringNumbers); // ["1", "2", "3", "4", "5"]

// example7: increase salary by 10%
// const employees = [
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 60000 },
//   { name: "Charlie", salary: 70000 },
// ];
// const updatedEmployees = employees.map((employee) => ({
//   ...employee,
//   salary: employee.salary * 1.1,
// }));
// console.log(updatedEmployees);

//example8: add a new property to each object in an array
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];
// const updatedProducts = products.map((product) => ({
//   ...product,
//   inStock: true,
// }));
// console.log(updatedProducts);

//------------.filter()------------

// filter creates a new array containing only the elements that pass a test (return true from the callback
// function).

//example1: filter even numbers
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]

// example2: get odd numbers
// let numbers = [1, 2, 3, 4, 5, 6];
// let oddNumbers = numbers.filter((num) => num % 2 !== 0);
// console.log(oddNumbers); // [1, 3, 5]

//example3: get passing grades
// let grades = [85, 92, 78, 96, 88];
// let passingGrades = grades.filter((grade) => grade >= 80);
// console.log(passingGrades); // [85, 92, 96, 88]

//example4: filter adults from an array of objects
// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
// let adults = people.filter((person) => person.age >= 18);
// console.log(adults); // [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

//-------------------------------some and every method of arrays-------------

// every method in array works return final boolean value and works on and operator priciple. It checks if all elements in an array satisfy a condition and returns true if they do, otherwise false.
//example1: chech if all are adults
// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
// let allAdults = people.every((person) => person.age >= 18);
// console.log(allAdults); // true

//example2: check if all numbers are positive
// let numbers = [1, 2, 3, 4, 5];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive); // true

//example3:check if all students passed
// let students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 78 }
// ];
// let allPassed = students.every((student) => student.grade >= 60);
// console.log(allPassed); // true

//example4: check if all numbers are even
// let numbers = [2, 4, 6, 8, 10];
// let allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven); // true

//example5: check if all strings have length greater than 3
// let strings = ["apple", "banana", "cherry"];
// let allLongerThanThree = strings.every((str) => str.length > 3);
// console.log(allLongerThanThree); // true
