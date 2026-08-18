//JAVASCRIPT DAY 4 STRING METHODS 
//some of the a;lready used examples of methids 
//alert()
// prompt()
//.length()



//.trim()
// The .trim() method removes whitespace (spaces, tabs, newlines) from both the beginning and end of a string.
// This is especially useful for cleaning up user input.

// let userName="    ashutosh rana    "
// console.log(userName)
// let newName=userName.trim()     
// console.log(newName)

// // Example 2: Trimming user input
// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"

// NOTE: STRINGS ARE IMMUTABLE
// STRINGS CANNOT BE CHANGED IN THE SAME MEMORY LOCATION ONCE THEY  ARE CREATED. IT HAS TO BE STORED IN A NEW VARIABLE WHEN CHANED/MODIFIED

//EXAMPLE:
// let country ="india"
// let newCountry= country.replace("india", "remove RSS");
// console.log(newCountry);

// let greeting="hello world!";
// greeting.toUpperCase();
// console.log(greeting)
//returns the greeting variable value which is unchanged

// in order to get the updated value we must store it in a new variable 

// let greeting="hello world!";
// let newGreeting=greeting.toUpperCase();
// console.log(newGreeting);

// example: cannot change indivisual charecters
// let word="cat";
// word[0]="b"; //this doesnt work
// console.log(word);

//Example: multiple operations creates multiple strings 
// let word ="    HELLO"
// let lower=word.toLowerCase().trim()
// console.log(word)
// console.log(lower)

//CASE CONVERESION METHODS 
//.toLowerCase(): converts all the letters to capital 
//.toUpperCase(): convertys all the charecters of a string to lowercase

//example1
// let msg="javascript is a userfriendly programming language"

// let capMsg = msg.toUpperCase()
// console.log(capMsg)

// Example 2: Converting to lowercase
// let shout = "STOP YELLING";
// console.log(shout.toLowerCase()); // "stop yelling"

// // Example 3: Comparing user input (case-insensitive)
// let userInput = "YeS";
// if (userInput.toLowerCase() === "yes") {
// console.log("User agreed!");
// }


//STRING METHODS WITH ARGUMENTS - indexOf()
// The .indexOf() method searches for a value in a string and returns the index (position) of its first occurrence. If
// the value is not found, it returns -1 .

//example1
// let varName = "Hello World!"
// console.log(varName.indexOf("W"))
// console.log(varName.indexOf("e"))