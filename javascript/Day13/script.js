// console.log("day 13 of js")
//CALLBACKS AND PROMISES

// SINGLE THREADED VS MULTI THREADED
// JS is a single threraded programing language. In CPU there are multiple threads alloted for function operation and execution. so JS is alloted a single thread for executing its programs. But here comes the real problem, when the single thread is occupied with a time consuming program, the rest of the existing code  has to be on the halt until the orevious code executes because js  executes code line by line sequentially. CPU can be blocked by two blocking problems
// 1. CPU intensive tasks 2.  I/O heavy task

//SYNCHRONOUS AND ASYNCHRONOUS FUNCTIONS
// in order to resolve this blocking problem asynchronous functions are introduced in late 1990s.
// asynchronous functions are those time consuming functions which are alloted a seperate place in the cpu for it to run wihtou any consent of the sequential flow of the code.

// example of synchronous function:
// let name=[]
// username= prompt("enetr your name")
// name.push(username)
// console.log(name)

//exampleof asyncronous code:
// console.log("task 1 completed")
// console.log("task 2 completed")
// setTimeout(() => {
//     console.log("Task3 completed")
// }, 2000);
// console.log("task 4 completed")

// here the blocking problem is resvoled but two new problems introduced:

// 1. we want some code to run only after asynchronous code
//2. certain times asynchronous code may run or may not based ona a boolean condition halting the further execution of the code

// in order to solve this problem callback function are used:
// CALLBACKS

// example:1

// function grandFather(grandFatherName, callback) {
//   setTimeout(() => {
//     console.log("grandfather name is :", grandFatherName);

//     callback();
//   }, 1500);
// }

// function father(fatherName, callback) {
//   setTimeout(() => {
//     console.log("fatgher name is :", fatherName);
//     callback();
//   }, 2000);
// }

// function myName(myName) {
//   setTimeout(() => {
//     console.log("my name is:", myName);
//   }, 3000);
// }

// grandFather("mohiuddin", () => {
//   father("nayeemudddin", () => {
//     myName("burhan");
//   });
// });

// now the asynchroous code is also working in the logical sequence

//example2:
// function serviceVehicle(carModel, phoneNumber) {
//   console.log("Received", carModel, "for service");
//   console.log("Customer can leave now");
//   setTimeout(() => {
//     console.log("Service complete!");
//     phoneNumber(); // Call the customer back
//   }, 3000);
// }
// function customerCallback() {
//   console.log("📞 Ring ring! Your car is ready!");
//   console.log("Customer returns to pick up car");
// }
// serviceVehicle("Honda City", customerCallback);

//example3: food order
// function order(foodItem, callbackFn){
//     console.log(`your order ${foodItem} is recieved`)
//     setTimeout(() => {
//             console.log("your order will take 5s to complete, go grab a drink!")

//     }, 1000);
//     callbackFn()
// }

// function orderComplete(){
//     setTimeout(() => {
//             console.log('your order is completed, come and recieve at the table')
//     }, 5000);
// }

// order('pizza', ()=>{
//     orderComplete()
// })

//example 3: color changing rgby effect:

// const h1 = document.querySelector("h1");

// function red(callback) {
//   setTimeout(() => {
//     h1.style.backgroundColor = "red";
//     callback();
//   }, 1000);
// }

// function blue(callback) {
//   setTimeout(() => {
//     h1.style.backgroundColor = "blue";
//     callback();
//   }, 1000);
// }

// function green() {
//   setTimeout(() => {
//     h1.style.backgroundColor = "green";

//   }, 1000);
// }

// function yellow(callback) {
//   setTimeout(() => {
//     h1.style.backgroundColor = "yellow";
//     callback();
//   }, 1000);
// }

// red(() => {
//   yellow(() => {
//     blue(() => {
//       green();
//     });
//   });
// });

//or simplified version:
// function changeColor(color, delay, callback) {
//   setTimeout(() => {
//     h1.style.color = color;

//     callback();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("yellow", 1000, () => {
//     changeColor("green", 1000, () => {
//       console.log("finished");
//     });
//   });
// });

// / Example 5: fetchStudentData function and printStudentData function (lab work)
// function fetchData(callback){
//     console.log("sending request to db")
//     setTimeout(() => {
//        console.log( "received.")
//         callback()
//     }, 3000);
// }

// function printData(){
//     console.log("name: burhan\n class: x\n school: NSAHS")
// }

// fetchData(()=>{
//     printData()
// })

// Example 6: Register → Send Email → Update Database → Send Welcome SMS (lab work)

// function registration(callback) {
//     let delay = Math.floor(Math.random())
//   console.log("processing the registration...");
//   setTimeout(() => {
//     console.log("registeration completed");
//     callback();
//   }, 1500);
// }

// function sendEmail(callback) {
//   console.log("sending email");
//   setTimeout(() => {
//     console.log("email sent!");
//     callback();
//   }, 2000);
// }

// function updateDatabase(callback) {
//   console.log("updating db");
//   setTimeout(() => {
//     console.log("updated database!");
//     callback();
//   }, 1000);
// }

// function welcome() {
//   console.log("Welcome to the service!");
// }

// registration(() => {
//   sendEmail(() => {
//     updateDatabase(() => {
//       welcome();
//     });
//   });
// });
