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

// let fruits=["apple", "banana", "mango", "Grapes", "kiwi"]
//     console.log(fruits[3])
//     fruits[3]="guvava"
//     console.log(fruits[3])//updated


// example2: modifying multiple elements
// let numbers =[1,2,3,4,5,6,7,8,9]
// numbers[5]=23
// numbers[2]=44
// numbers[1]=66
// console.log(numbers)


//example3: changing last element
// let arr = [10,20,30,40,50]
// console.log(arr)
// arr[arr.length-1]=300
// console.log(arr)


// // Example 4: Arrays vs Strings mutability
// let arr = ["a", "b", "c"];
// arr[0] = "z"; // Works!
// console.log(arr); // ["z", "b", "c"]

// Example 5: Updating based on condition
// let scores = [85, 90, 75, 88];
// if (scores[2] < 80) {
// scores[2] = 80; // Bump up the low score
// }
// console.log(scores); // [85, 90, 80, 88]

//BASIC ARRAY METHIDS
//.push(): use to add an element in the end of array 

//example1:
// let arr =["apple", "banana", "mango", "grapes"]
// console.log(arr)
// arr.push("guvava")
// console.log(arr)


// example2:
// let num=[12,23,34,45,56,67,78]
// console.log(num)
// num.push("sigmoid")
// console.log(num)


//.pop() -- no need to pass the argument it simply removes the last element if the array

//example1: 
// let arr = ["red", "blue", "green", "yellow"]
// console.log(arr)
// arr.pop()
// console.log(arr)

// Example 2: Using pop() to remove from end
// let colors = ["red", "green", "blue"];
// let removed = colors.pop();
// console.log(removed); // "blue"
// console.log(colors); // ["red", "green"]


//.unshift --  adds the element in the begining of the array 

// exampl1:
// let num =[1,2,3,4,5,6,7]
// console.log(num)
// num.unshift(77)
// console.log(num)


//example2:
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers); // [1, 2, 3, 4]


//.shift() -- removes the element from the begining of the aray 
// example1
// let words =["cat", "dog", "car", "fort"]
// console.log(words)
// words.shift()
// console.log(words)


// example2
// let items =["first", "second", "third", "fourth"]
// console.log(items)
// items.shift()
// console.log(items)


//COMBINIING MULTIPLE OPERATIONSS
// let stack = [1, 2, 3];
// stack.push(4); // [1, 2, 3, 4]
// stack.push(5); // [1, 2, 3, 4, 5]
// stack.pop(); // [1, 2, 3, 4]
// stack.unshift(0); // [0, 1, 2, 3, 4]
// console.log(stack); // [0, 1, 2, 3, 4]



//SEARCH AND MERGE METHODS 
//.indexOf()

//example1:
// let cars =["toyota", "jeep", "kaiser", "oxford morris", "nissan"]
// let indexOfCar= cars.indexOf("jeep")
// console.log(indexOfCar)

//example2:
// let bikes=["harley", "ducati", "yezdi", "yamaha"]
// console.log(bikes.indexOf("yezdi")) //2

//example3:

// let arr = ["red", "yellow", "black", "purple", "blue"]
// let userInput = prompt("Enter the color you want to find:")
// let indexOfArr = arr.indexOf(userInput)

// if (indexOfArr === -1)
// {
//     alert("teh color is not available")
// }
// else {
//     alert(`the color ${userInput} is found at: ${indexOfArr}`)
// }




//.includes() --- finds the value is present in the array or not ...returns the boolean value based on whether the value found is true or not 

//example1:
// let colors = ["red", "green", "blue"];
// console.log(colors.includes("green")); // true
// console.log(colors.includes("yellow")); // false


//.reverse() ---- use to reverse the sequence of the array
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [5, 4, 3, 2, 1]

// Example 5: Combining methods
// let items = ["a", "b", "c"];
// let moreItems = ["d", "e"];
// let all = items.concat(moreItems);
// console.log(all.includes("c")); // true
// console.log(all.indexOf("d")); // 3


//.slice() --- slice the elemnts of the arrays 
// let arr = ["red", "yellow", "black", "purple", "blue"]
// console.log(arr)
// let newaArr = arr.slice(1,3)
// console.log(newaArr)


//.splice()
//example1:
// let months = ["Jan", "March", "April"];
// console.log(months)
// months.splice(1,0, "feb")
// console.log(months)

// Example 2: Removing elements
// let colors = ["red", "green", "blue", "yellow"];
// colors.splice(2, 1); // Remove 1 element at index 2
// console.log(colors); // ["red", "green", "yellow"]

// // Example 3: Replacing elements
// let fruits = ["apple", "banana", "mango"];
// fruits.splice(1, 1, "orange");
// console.log(fruits); // ["apple", "orange", "mango"]

// // Example 4: Removing and adding multiple elements
// let numbers = [1, 2, 5, 6];
// numbers.splice(2, 0, 3, 4); // Insert 3 and 4 at index 2
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// // Example 5: Removing multiple elements
// let items = ["a", "b", "c", "d", "e"];
// items.splice(1, 3); // Remove 3 elements starting at index 1
// console.log(items); // ["a", "e"]

//Array references 
//When you assign an array to a variable, you're storing a reference (memory address) to that array, not the actual
// values. This means two variables can point to the same array.

// let num1 = [1,2,3,4]
// let num2 = num1
// num2.push(33)
// console.log(num2)
// console.log(num1)//(also changed!)


// Example 3: Both variables point to same array
// let colors = ["red", "green"];
// let palette = colors;
// palette.push("blue");
// console.log(colors); 
// console.log(palette); 

// Example 4: Comparing references
// let a = [1, 2, 3];
// let b = a;
// console.log(a === b); // true (same reference)
// let c = [1, 2, 3];
// console.log(a === c); // false (different references)


//NESTED ARRAYS :
// Arrays can contain other arrays as elements, creating multi-dimensional structures. These are useful for
// representing grids, matrices, or tables.
// Syntax: let grid = [[row1], [row2], [row3]];

// let matrix = [[1,2,3],[1,2,3],[1,2,3]]
// console.log(matrix[0][0])
// console.log(matrix[0][1])
// console.log(matrix[0][2])
// console.log(matrix[1][0])
// console.log(matrix[1][1])
// console.log(matrix[1][2])


// Example 2: Tic-tac-toe board
// let board = [
// ["X", "O", "X"],
// ["O", "X", "O"],
// ["O", "X", "X"]
// ];
// console.log(board[0][0]); // "X" (top-left)
// console.log(board[2][2]); // "X" (bottom-right)

// Example 3: Student grades
// let grades = [
// ["Alice", 85, 90, 92],
// ["Bob", 78, 88, 84],
// ["Charlie", 92, 95, 88]
// ];
// console.log(grades[0][0]); // "Alice"
// console.log(grades[1][2]); // 88 (Bob's second grade)


// Example 5: Complex nested structure
// let data = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
// console.log(data[1][1]); // 5 (center element)
// console.log(data[2][0]); // 7 (bottom-left)