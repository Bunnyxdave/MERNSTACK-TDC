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
function task1() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 5);
    let isDbavailable = Math.floor(Math.random() * 2);
    console.log("starting task 1...");
    setTimeout(() => {
      if (isDbavailable) {
        resolve("completed task 1");
      } else {
        reject("db is unavailable");
      }
    }, delay * 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDbavailable = Math.floor(Math.random() * 2);
    console.log("starting task 2...");
    setTimeout(() => {
      if (isDbavailable) {
        resolve("completed task 2");
      } else {
        reject("db is unavailable");
      }
    }, delay * 1000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3);
    let isDbavailable = Math.floor(Math.random() * 2);
    console.log("starting task 3...");
    setTimeout(() => {
      if (isDbavailable) {
        resolve("completed task 3");
      } else {
        reject("db is unavailable");
      }
    }, delay * 1000);
  });
}

async function runningTask() {
  console.log("running all tasks");
  try {
    let response1 = await task1();
    console.log(response1);

    let response2 = await task2();
    console.log(response2);

    let response3 = await task3();
    console.log(response3);

    console.log("all tasks completed");
  } catch (rejectMsg) {
    console.log(rejectMsg);
  }
}

runningTask();
