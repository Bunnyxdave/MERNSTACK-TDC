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

//ESCAPE SEQUENCES
//console.log("this is first line\n this is second line") for next line
//console.log("Name:\tAlice")  for space



//STRING INDEXING
//JavaScript uses 0-based indexing for strings.
// Accessing Characters
// Use square brackets [] with the index number:

// let studentName="ashutosh";
// 'a'-0
// 's'-1
// 'h'-2
// 'u'-3
// 't'-4
// 'o'-5
// 's'-5
// 'h'-6
// console.log(studentName[3]); // u

// let city = "London";
// console.log(city[0]); // "L" - first character
// console.log(city[1]); // "o" - second character
// console.log(city[2]); // "n" - third character
// console.log(city[3]); // "d" - fourth character
// console.log(city[4]); // "o" - fifth character
// console.log(city[5]); // "n" - sixth (last) character

// let disco ="badshah"
// let first =disco[4]

// console.log(first)

// let disco ="badshah"
// let last =disco[disco.length-1]

// console.log(last)
// VM6226:4 h
//NOTE:Accessing an index that doesn't exist returns undefined

//SOME OF THE PRACTICAL EXAMPLES BASED ON THE STRING INDEXING

// let firstName="mohammed"
// let lastName="burhanuddin"

// let fullName=`Hi! my name is ${firstName} ${lastName}`
// console.log(fullName)


//Important Notes
// 1. Strings are Immutable: You cannot change individual characters


//STRING CONCATENATION
//// Joining two strings
// let firstName = "Alice";
// let lastName = "Smith";
// let fullName = firstName + lastName;
// console.log(fullName); // "AliceSmith"

// Number + String = String
// let score = 100;
// let message1 = "Your score is: " + score;
// console.log(message1); // "Your score is: 100"
// console.log(typeof message1); // "string"
// // String + Number = String
// let message2 = "Player " + 1;
// console.log(message2); // "Player 1"
// // Multiple numbers and strings
// let age = 25;
// let message3 = "I am " + age + " years old";
// console.log(message3); // "I am 25 years old"


//aADDING NUMBER AND STRING USING +
// console.log(10+"20" )//whole data is treated as string

//CONCATENATION VS TEMPLATE LITERALS
// Concatenation (hard to read)
// let name = "Alice";
// let age = 25;
// let city = "New York";
// let message = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
// // Template Literal (easier to read) - We'll cover this next!
// let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;



//CONSOLE.LOG
// let product= "Laptop";
// let price="277"

// console.log("product:", product);
// console.log("price:", price)



//COMAPRASION OPERATORS
// Comparison operators are used to compare two values and return a boolean result ( true or false ). They're
// essential for making decisions in your code.

//1. GREATER THAN >
// console.log(10 > 5); // true
// console.log(5 > 10); // false
// console.log(5 > 5); // false (not greater, just equal)
// let age = 20;
// console.log(age > 18); // true

//2. LESS THAN <
// console.log(5 < 10); // true
// console.log(10 < 5); // false
// console.log(5 < 5); // false
// let score = 45;
// console.log(score < 50); // true

//3. GREATER THAN EQUALTO >=
//console.log(10 >= 5); // true (10 is greater)
// console.log(5 >= 10); // false
// console.log(5 >= 5); // true (equal counts!)
// let age = 18;
// console.log(age >= 18); // true (can vote)

//4.LESSER THAN EQUALTO <=
// console.log(5 <= 10); // true
// console.log(10 <= 5); // false
// console.log(5 <= 5); // true
// let temperature = 25;
// console.log(temperature <= 30); // true

//5. NOT EQUALTO !=
// console.log(5 != 4); // true
// console.log(5 != 5); // false
// console.log(5 != "5"); // false (converts string to number)
// let userInput = 10;
// console.log(userInput != 0); // true

//6. LOSELY EQUALTO ==
// console.log(5 == 5); // true
// console.log(5 == "5"); // true (string converted to number)
// console.log(1 == true); // true (boolean converted to number)
// console.log(0 == false); // true
// let x = 10;
// let y = "10";
// console.log(x == y); // true (type conversion happens)

//LOOSE EQUALITY == VS STRONG EQUALITY ===
// console.log(5==5)
// console.log("hi" == "hi"); // true
// // Different types - converts before comparing
// console.log(5 == "5"); // true (string "5" converted to number 5)
// console.log(1 == true); // true (true converted to 1)
// console.log(0 == false); // true (false converted to 0)
// console.log("" == false); // true (both are "falsy")


//STRING COMAPRASION
//JavaScript can compare strings using comparison operators, but it uses Unicode (ASCII) values rather than
// alphabetical order.
// Single character comparisons
// console.log('a' > 'A'); // true (97 > 65)
// console.log('b' < 'c'); // true (98 < 99)
// console.log('A' < 'a'); // true (65 < 97)
// // String comparison
// console.log("apple" < "banana"); // true (a < b)
// console.log("cat" > "bat"); // true (c > b)

//Character-by-Character Comparison
//JavaScript compares strings from left to right:
// console.log("apple" > "abstract")
// console.log("hello" > "help"); // false

// console.log("Apple" < "apple"); // true (A < a)
// console.log("HELLO" < "hello"); // true (H < h)

// Order: Numbers < Uppercase < Lowercase

// console.log('9' < 'A'); // true (57 < 65)
// console.log('Z' < 'a'); // true (90 < 97)
// console.log('0' < 'a'); // true (48 < 97)