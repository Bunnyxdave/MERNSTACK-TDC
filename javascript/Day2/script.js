//IDENTIFIER RULES
//CHARECTERS ALLOWED ARE A-Z a-z 0-9 and two special scharecters _ and $
//no identifier can beign with a number 
//no spcae is allwoed 
//case sensitive
//no reserved keywords


// // Valid examples
// let userName123;
// let _privateVariable;
// let $specialValue;
// let total_AMOUNT;

// // Invalid
// let user name; // ❌ Error
// let total cost; // ❌ Error
// // Valid alternatives
// let userName; // ✓ Use camelCase
// let user_name; // ✓ Use underscores
// let totalCost; // ✓ Use camelCase

//CAMEL CASING
//FRIST LETTER OF SECOND WORDIN AN INDENTIFIER SHOULD BE CAPITALIZED
// let userName="bunny"
// let rollNumber=89
// let isDonationRecieved=false

//SNAKE CASE
// let user_name_of_the_student="akash"
// let first_attendee__of_expo="first"

//SCREAMING SNAKE CASE
//let USER_NAME_OF_THE_STUDENT="rakesh"

//IT IS NECESSARY FOR USER TO MAINTIN DESCRIPTIVE NAMING RULE IN ORDER TO GET THE SEMANTICS OF CODE

// Bad - unclear names
// let x = 25;
// let y = "John";
// let z = true;
// // Good - descriptive names
// let userAge = 25;
// let firstName = "John";
// let isEmailVerified = true;
// // Bad - too short
// let fn = "Alice";
// let ln = "Smith";
// // Good - clear and readable
// let firstName = "Alice";
// let lastName = "Smith";
// // Bad - abbreviations
// let usrAddr = "123 Main St";
// let empSal = 50000;
// // Good - spelled out
// let userAddress = "123 Main St";
// let employeeSalary = 50000;


//BOOLEAN AND DYNAMIC TYPING
// let isLoggenIn=true;
// let isOver18=false;
// let hasPermission=true;

//BOOLEAN IN CONDITIONS
// if (true){
//     console.log("this is true")
// }

// let isStudent=true;

// if(isStudent){
//     console.log("yea student is present");
// }
// else{
//     console.log("no student is absent")
// }


//DYNAMICALLY TYPED 
// let studentName="akash";
// console.log(studentName, typeof studentName)

//     studentName="rakesh"
// console.log(studentName, typeof studentName)

//     studentName="aijaz"
// console.log(studentName, typeof studentName)

//     studentName=123
// console.log(studentName, typeof studentName)

//     studentName=true
// console.log(studentName, typeof studentName)


//STRINGS IN JS 
//WE CAN DEFINE STRINGS USING THREE NOTATIONS 
//1. SINGLE QUOTES
//let message=('this is a philosophy class')
//   message=("this is a stinrg")
//   message=(`this is a string`)


//NESTING QUOTES 
// //OPTION 1: USE DOUBLE QUOTES INSIDE THE SINGLE QUOTES
// console.log('this is my name "burhan"')

// //OPTION 2: USE SINGLE QUOTES INSIDE DOUBLE QUOTES
// console.log("this is my dog 'DOLLAR'")

// //OPTION 3: ESCAPE CHARECTERS WITH BACKLASH
// console.log('it\'s a good day ')
// console.log("hello world for \"sofia\"")

// //OPTION 3: USING BACKTICKS
// let message1 = `It's a beautiful day`; 
// let message2 = `She said, "Good morning!"`;



//STRING PROPERTIES
//LENGTH 
// let userId="ashiqbanayaaaapne"
// console.log(userId.length) //17

// let child="my name is \nbeingshark"
// console.log(child.length)


// //uppercase, lowercase, replace, extract part of string
// let text="hello world"
// //uppercase
// console.log(text.toUpperCase()) //HELLO WORLD
// //lowercase
// console.log(text.toLowerCase()) //hello world
// //replace
// console.log(text.replace("world", "javascript")) //hello javascript