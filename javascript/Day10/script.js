// console.log("js day 10 DOM - DOCUMENT OBJECT MODEL")
//DOM -document object model
// The DOM (Document Object Model) is JavaScript's way of seeing and interacting with your HTML page.
// Think of it as a bridge that connects your HTML code to JavaScript.

// The DOM (Document Object Model) is JavaScript's way of seeing and interacting with your HTML page.
// Think of it as a bridge that connects your HTML code to JavaScript.

//THE document Objet:

// console.log(document) - it will only fetch ypu the html of the document

// isntead use console.dir

//console.dir(document)  - this will fetch you the whole directory of the objects in the dpcument as a tree structure

//-----------selecting elements by id-------------

// console.dir(document.getElementById("page-header"))
// console.dir(document.getElementById("main-title"))
// console.dir(document.getElementById("controls-section"))
// console.dir(document.getElementById("practice-form"))

// we can also store them in a variable

// let pageheader = document.getElementById("page-header")
// console.dir(pageheader).

// let title = document.getElementById("main-title")
// console.dir(title)

//------------selecting elements by classname-------
// console.dir(document.getElementsByClassName("task-item"))
// console.dir(document.getElementsByClassName("panel"))

// let taskitm = document.getElementsByClassName("task-item")
// console.dir(taskitm)

// let panel = document.getElementsByClassName("panel")
// console.dir(panel)

//-----------selecting elements by tagname-----------
// console.dir(document.getElementsByTagName("h2"))
// console.dir(document.getElementsByTagName("input"))

// let input = document.getElementsByTagName("input")
// console.dir(input)

//----Query selector - the swiss army knife----------
//can take input as classname id tagname all in one
// will only retrive the first element whn called for multiple elemts under ssinglename

// let heading = document.querySelector("h1")
// console.dir(heading)

//---when selecting by a classname use ' . ' similar to as css
// let _item =document.querySelector(".task-item")
// console.dir(_item)
// it returns only single and first element from the class list of items

//----when selecting an element using id then use '#'
// let title =document.querySelector("#main-title")
// console.dir(title)

// let elem = document.querySelector("#toggle-theme-btn")
// console.dir(elem)

//-- to select all elemnts under a single classname or tagname we have queryselctorall

// let head_list = document.querySelectorAll("h2")
// console.dir(head_list)

// let _item =document.querySelectorAll(".task-item")
// console.dir(_item)


//-----------INNER HTML, INNER TEXT, TEXT CONTENT---------------
//we can also manupilate the inner properties of the dom objects 


// let heading = document.querySelector("h1")
// heading.innerText=" boom shakalaka"

// let subhead = document.querySelectorAll("h2")
// subhead.forEach((elem)=>{
//     elem.innerText="burhan"
// })

// similarly we can also use ionner html to get the text data oriented as per the html file
//they differ significantly in how they handle HTML tags, hidden text, and performance
// let para = document.querySelector("p")
// para.innerHTML = "bunnyxdave"

