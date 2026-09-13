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
