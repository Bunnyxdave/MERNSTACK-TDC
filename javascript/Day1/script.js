//javascript day 1

// VARIABLES IN JS
//CREATING A VARIABLE AND ASSIGNING A VALUE

// let age=23;
// let name="tony";
// let isStudent= true;

//you can declare without assigning  a value 
// let score;
// console.log(score)

//later assign value 
// score=10;
// console.log(score);


//DATATYPES IN JS 
// NUMBER DATATYPE (UNLIKE ANY OTHER PROGRAMMING LANGUAGES JS GROUP ALL TYPES OF NUMBERS UNDER A SINGLE DATATYPE NAMED AS "NUMBER" )
// let age=22;  
// let salary=12000;
// let percentage=99.67;
// let tempurature = -14;

//STRING DATATYPE (EVERYTHING THAT COMES IN BETWEEN "QUOTES" )
// let name="tony";
// let age="22";
// let greeting="hello bunny";


//BOOLEAN DATATYPE (EITHER TRUE OR FALSE / BINARY VALUES 0 OR 1)

// let isStudent = true;
// let isLoggedIn = false;
// let hasPermission = true;
// // Often used in conditions
// if (isStudent) {
// console.log("Student discount applied!");
// }


//UNDEFINED DATATYPE (A variable that has been declared but not assigned a value.)
// let score;
// console.log(score); // Output: undefined
// console.log(typeof score); // Output: "undefined"
// // This is different from not declaring a variable at all
// console.log(randomVar); // Error: randomVar is not defined


//NULL DATATYPE (Represents the intentional absence of any value. It's an assignment value meaning "no value" or "empty".)
// let data = null; // Explicitly saying "this has no value right now"
// // Common use case
// let user = null; // No user logged in yet
// // Later, when user logs in
// user = { name: "Alice", id: 101 };

//BIGINT DATATYPE (USED FOR OVER LARGE NUMBERS)
// let bankbalance=1234565875894938484789n;
// let huge = 12345678901234567890n;
// console.log(huge)


// checking datatypes
// console.log(typeof 25); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is a JavaScript quirk!)
// console.log(typeof 123n); // "bigint"



//OPERATORS IN JS
//ADDITION + 
console.log(1+3);
