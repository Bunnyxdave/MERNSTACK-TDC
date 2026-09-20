// console.log("js day 17 working with apis and json")

//what is an API?
// An API (application programming interface) is an interface that allows different softwares to communicate with each other

// example of API = https://dummyjson.com/users

// what is JSON?
// JSON (Javascript Object Notation) is a light weight format used for storing and transporting data. it is the standard language for api responses
// json rules:
// key must be in double quotes ex: "name" : "aleem"
//values can be string number boolean objects etc
// looks similar to js objects but stricter

//WORKING WITH JSON DATA
//JSON.stringify()

// let student = { name: "ali", phone: 33009933, age: 45, city: "chicago" };

// let api = JSON.stringify(student);
// console.log(api);
// like this we can convert js objects in json text

// and for converting json text to js objects we have
//JSON.parse()

// let api2 =JSON.parse(api)
// console.log(api2)

// API REQUEST-RESPONSE FLOW
// CLIENT SENDS REQUEST -> SERVER PROCESSES -> JSON RESPONSE CREATE -> PARSE AND USE

// IN ORDER TO TEST APIs WE HAVE SERVIES LIKE POSTMAN AND HOPPSCTOCH

//-------PARTE 2-----------

//AJAX AND HTTP

// AJAX (asynchronous js and XML) is a technique of loading data in the background without refreshing the whole page.

// HTTP VERBS- TELLS the api what YOU WHAT you want
// request type:
// GET , POST , UPDATE, DELETE

//----------------fetch()-----------
//it is an async promisified function that retrieve the json text/data from the url

// fetch promise consume 1: .then.catch

// fetch("https://dummyjson.com/todos")
//   .then((resolveMsg) => {
//     return resolveMsg.text();
//   })
//   .then((body) => {
//     let result = JSON.parse(body);
//     console.log(result);
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// promise consume 2: async await
// async function getData() {
//   const response = await fetch("https://dummyjson.com/todos");
//   const body = await response.text();
//   const obj = JSON.parse(body);
//   console.log(obj);
// }

// getData();

//------------------------------------------------------------------------

// 2 layers of any software(Application)

// Eg: Todo App

// 1st Data layer
// let todoArr = ["Go to College", "Go to market", "Go to TDC"];

// 2nd UI Layer

// function main() {
//   const newElem1 = document.createElement("h3");
//   newElem1.innerText = todoArr[0];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem1);

//   const newElem2 = document.createElement("h3");
//   newElem2.innerText = todoArr[1];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem2);

//   const newElem3 = document.createElement("h3");
//   newElem3.innerText = todoArr[2];
//   document.querySelector("body").insertAdjacentElement("beforeend", newElem3);
// }

// main();
