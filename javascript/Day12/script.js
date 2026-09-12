// console.log("day 12 - event listeners")

//-----------EVENT LISTENERS----------------
//EVENTS LISTENERS are the signals sent by the borwser in order to trigger any function

//example1:

//creating an elemnt:
const btn = document.createElement("button")
btn.classList.add("signin-btn")
btn.innerText="SIGN-IN"
document.body.insertAdjacentElement("afterbegin", btn)

// adding eventlistener:
// btn.addEventListener("click", ()=>{
//     alert("you are signed in")
// })

//here there are 5 types of eventlisteners majorly used
//1. Mouse event listeners: click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove

// dblclick:
// btn.addEventListener("dblclick", ()=>{
//     alert("you are signed in")
// })

//mousedown:
// btn.addEventListener("mouseenter", ()=>{
//     console.log("bakc#*di mat kar lovede")
// })


// is mousedown and clickk same?
// No, they are not the same. While they are closely related, a click event is actually the combination of two separate actions.
// click = mousedown + mouseup

// mosuedown is the pressing trigger and mouse up is the releasing trigger

//mouseleave:
// btn.addEventListener("mouseleave", ()=>{
//     alert("just do it")
// })

