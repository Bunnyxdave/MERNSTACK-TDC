//AwAIT & ASYNC modern way to write asynchronous code

// When you put async before a function, that function automatically returns a Promise. Even if you return a regular value, JavaScript wraps it in a Promise for you.

// The await keyword literally "pauses" the execution of an async function until a Promise is settled (either resolved or rejected). It can ONLY be used inside an async function.

//  Example 1: // Simulating an API call that takes 2 seconds
// function fetchStudentData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Ahmed", grade: "A" });
//     }, 2000);
//   });
// }
// async function displayStudent() {
//   console.log("Fetching student data...");
//   // Execution pauses here for 2 seconds
//   const student = await fetchStudentData();
//   // This line won't run until the Promise resolves
//   console.log("Student Name:", student.name);
//   console.log("Student Grade:", student.grade);
// }
// displayStudent();

//example: 2
// function task1() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 5);
//     let isDbavailable = Math.floor(Math.random() * 2);
//     console.log("starting task 1...");
//     setTimeout(() => {
//       if (isDbavailable) {
//         resolve("completed task 1");
//       } else {
//         reject("db is unavailable");
//       }
//     }, delay * 1000);
//   });
// }

// function task2() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3);
//     let isDbavailable = Math.floor(Math.random() * 2);
//     console.log("starting task 2...");
//     setTimeout(() => {
//       if (isDbavailable) {
//         resolve("completed task 2");
//       } else {
//         reject("db is unavailable");
//       }
//     }, delay * 1000);
//   });
// }

// function task3() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3);
//     let isDbavailable = Math.floor(Math.random() * 2);
//     console.log("starting task 3...");
//     setTimeout(() => {
//       if (isDbavailable) {
//         resolve("completed task 3");
//       } else {
//         reject("db is unavailable");
//       }
//     }, delay * 1000);
//   });
// }

// async function runningTask() {
//   console.log("running all tasks");
//   try {
//     let response1 = await task1();
//     console.log(response1);

//     let response2 = await task2();
//     console.log(response2);

//     let response3 = await task3();
//     console.log(response3);

//     console.log("all tasks completed");
//   } catch (rejectMsg) {
//     console.log(rejectMsg);
//   }
// }

// runningTask();

//-------------ASYNC-------------
//Async functions with Errors

// async function divide(a,b){
//     if(b === 0){
//         throw new Error("Cannot Divide by Zero")
//     }
//     else {
//         return a/b
//     }

// }

// divide(10,2)
//     .then(result => console.log('result', result))
//     .catch( error => console.log("error",error.message))

//     divide(0,0)

//------AWAIT-------------

//What Does await Do?
// The await keyword literally "pauses" the execution of an async function until a Promise is settled (either
// resolved or rejected). It can ONLY be used inside an async function.

// example1:

// async function makeCoffee() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(" step 1");
//       console.log(" step 2");
//       console.log(" step 3");
//       resolve();
//     }, 2000);
//   });
// }

// async function orderCoffee() {
//   console.log("Order placed");
//   await makeCoffee(); //you wait here until coffee is ready eady
//   console.log("Coffee received, now I can drink it");
// }

// orderCoffee();

// example 2: fetching data from db
// function fetchData() {
//   return new Promise((resolve) => {
//     let student = { name: "Ahmed", age: 22, isPassed: true, Grade: "A" };
//     let delay = Math.floor(Math.random() * 5);
//     setTimeout(() => {
//       console.log(student.name);
//       console.log(student.age);
//       console.log(student.isPassed);
//       console.log(student.Grade);
//       resolve();
//     }, delay * 1000);
//   });
// }

// async function displayData() {
//   console.log("fetching your data...");

//   await fetchData();

//   console.log("compleetd!");
// }

// displayData();

