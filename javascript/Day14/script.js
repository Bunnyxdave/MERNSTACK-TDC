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
function registration(username) {
	const registeredUsers = ["armaan", "Malik", "sajjad", "Ali", "Muqtaar"];

	if (registeredUsers.includes(username)) {
		throw new Error("user is already registered");
	}

	console.log("user is not registered, continuing...");
	registeredUsers.push(username);
	return username;
}

function verifyingEmail() {
	return new Promise((resolve) => {
		const delay = Math.floor(Math.random() * 4);
		console.log("registration started...");
		setTimeout(() => resolve("verifying email..."), delay * 1000);
	});
}

function auth() {
	return new Promise((resolve) => {
		const delay = Math.floor(Math.random() * 4);
		setTimeout(() => resolve("authenticating..."), delay * 1000);
	});
}

function add() {
	return new Promise((resolve) => {
		const delay = Math.floor(Math.random() * 4);
		setTimeout(() => resolve("adding user to db..."), delay * 1000);
	});
}

function addSuccess() {
	return new Promise((resolve) => {
		const delay = Math.floor(Math.random() * 4);
		setTimeout(() => resolve("user added successfully..."), delay * 1000);
	});
}

function welcome(username) {
	return Promise.resolve(`welcome, ${username}!`);
}

async function flow(user) {
	try {
		const newUser = registration(user);
		console.log(await verifyingEmail());
		console.log(await auth());
		console.log(await add());
		console.log(await addSuccess());
		console.log(await welcome(newUser));
	} catch (error) {
		console.log(error.message);
	}
}

flow("Hassan");
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

//example 2: registration form

// function registration(username) {
//   let registeredUsers = ["armaan", "Malik", "sajjad", "Ali", "Muqtaar"];

//   if (registeredUsers.includes(username)) {
//     throw new Error("user is already registered");
//   } else {
//     console.log("user is not registered, continuing...");
//   }

//   let newUser = username;
//   registeredUsers.push(newUser);
//   return newUser;
// }

// function verifyingEmail() {
//   return new Promise((resolve) => {
//     let delay = Math.floor(Math.random() * 4);
//     console.log("registration started...");
//     setTimeout(() => {
//       //---timeout
//       resolve("verifying email...");
//     }, delay * 1000);
//   });
// }
 

// function auth() {
//   return new Promise((resolve) => {
//     let delay = Math.floor(Math.random() * 4);

//     setTimeout(() => {
//       //---timeout
//       resolve("authenticating...");
//     }, delay * 1000);
//   });
// }

// function add() {
//   return new Promise((resolve) => {
//     let delay = Math.floor(Math.random() * 4);

//     setTimeout(() => {
//       //---timeout
//       resolve("adding user to db...");
//     }, delay * 1000);
//   });
// }

// function addSuccess() {
//   return new Promise((resolve) => {
//     let delay = Math.floor(Math.random() * 4);

//     setTimeout(() => {
//       //---timeout
//       resolve("user added successfully...");
//     }, delay * 1000);
//   });
// }

// function welcome(username) {
//   return new Promise((resolve) => {
//     resolve(`welcome, ${username}!`);
//   });
// }

// async function flow(user){
//     try{
//     const newUser = registration(user);
//     console.log(await verifyingEmail());
//     console.log(await auth());
//     console.log(await add());
//     console.log(await addSuccess());
//     console.log(await welcome(newUser));
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// flow("Hassan");






