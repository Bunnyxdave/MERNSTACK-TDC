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


//example 2 finding a substring
// let str="i hate javascript"
// console.log(str.indexOf("hate"))
// console.log(str.indexOf("script"))


// Example 3: Character not found
// let text = "Hello World";
// console.log(text.indexOf("z")); // -1


// Example 4: Case sensitivity
// let word = "JavaScript";
// console.log(word.indexOf("java")); // -1 (case matters!)
// console.log(word.indexOf("Java")); // 0



//METHOD CHAINING - WE CAN USE MULTIPLE METHODS IN A SINGLE INSTANCE UPON A VALUE OF THE VARIABLE

// Example 1: Basic chaining
// let msg = " hello ";
// let result = msg.trim().toUpperCase();
// console.log(result); // "HELLO"

// EXAMPLE:2
//  let msg="   hello   "
// let newMsg=msg.trim().toUpperCase().slice(2,4)
// console.log(newMsg)//LL

// Example 3: Cleaning user input
// let username = " UserName123 ";
// let processed = username.trim().toLowerCase();
// console.log(processed); // "username123"
// // Example 4: Complex chaining
// let text = " Hello World ";
// let output = text.trim().toUpperCase().replace("HELLO", "HI");
// console.log(output); // "HI WORLD"
// // Example 5: Order matters in chaining
// let word = "javascript";
// console.log(word.slice(0, 4).toUpperCase()); // "JAVA"
// console.log(word.toUpperCase().slice(0, 4)); // "JAVA" (same result)


//SLICING STRINGS

// Example 1: Basic slicing
// let word = "Mountains";
// console.log(word.slice(0, 5)); // "Mount"
// console.log(word.slice(5)); // "ains"
// // Example 2: Extracting middle portion
// let text = "JavaScript";
// console.log(text.slice(4, 10)); // "Script"
// // Example 3: Slicing from an index to end
// let message = "Hello World";
// console.log(message.slice(6)); // "World"
// // Example 4: Using negative indices (from end)
// let lang = "JavaScript";
// console.log(lang.slice(--6)); // "Script"
// console.log(lang.slice(0, --6)); // "Java"
// // Example 5: Getting first and last characters
// let name = "Alexander";
// console.log(name.slice(0, 1)); // "A" (first)
// console.log(name.slice(--1)); // "r" (last)


//REPLACING SUBSTRINGS

// let message="i am muhammed burhanuddi, i live in hyderabad and i love buttercookies"

// console.log(message.replace("love", "enjoy eating"))


// Example 2: Only first occurrence is replaced
// let text = "I love apple pie and apple juice";
// console.log(text.replace("apple", "orange"));
// // "I love orange pie and apple juice"
// // Example 3: Case sensitivity
// let message = "Hello hello HELLO";
// console.log(message.replace("hello", "hi")); // "Hello hi HELLO"
// // Example 4: Replacing spaces
// let sentence = "Hello World";
// console.log(sentence.replace(" ", "-")); // "Hello-World"
// // Example 5: Chaining with replace
// let str = " javascript ";
// let result = str.trim().replace("java", "type");
// console.log(result); // "typescript"


//--------------ARRAYS-------------------------//

//UNLIKE STRINGS ARRAYS ARE MUTABLE DATA-STRUCTURES . WE CAN PERFORM ALL CRUD OPERATIONS ON IT

