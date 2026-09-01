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