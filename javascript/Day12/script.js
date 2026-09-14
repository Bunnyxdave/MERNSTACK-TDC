// console.log("day 12 - event listeners")

//-----------EVENT LISTENERS----------------
//EVENTS LISTENERS are the signals sent by the borwser in order to trigger any function

//example1:

//creating an elemnt:
// const btn = document.createElement("button")
// btn.classList.add("signin-btn")
// btn.innerText="SIGN-IN"
// document.body.insertAdjacentElement("afterbegin", btn)

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

//Multiple Listeners on Same Element
// // First listener
// btn.addEventListener("click", function() {
// console.log("First action");
// });
// // Second listener (doesn't overwrite the first!)
// btn.addEventListener("click", function() {
// console.log("Second action");
// });

//lets make a counter
// let count = 0
// btn.addEventListener("click", ()=>{
//     count++
//     console.log("times you have clicked:", count)
// })

//lets make a toggle button functionality
// 
// const btn = document.createElement("button")
// btn.classList.add("signin-btn")
// btn.innerText="SIGN-IN"
// document.body.insertAdjacentElement("afterbegin", btn)

// btn.addEventListener("click", ()=>{
//     if( btn.innerText === "SIGN-IN"){
//         btn.innerText = "SIGN-OUT"
//         btn.style.backgroundColor ="red"
//     }
//     else if(btn.innerText === "SIGN-OUT"){
//         btn.innerText = "SIGN-IN"
//         btn.style.backgroundColor ="olivedrab"
//     }
// })

//Interactive card hover 
// let card = document.createElement("div")
// card.classList.add("card")
// document.body.insertAdjacentElement("beforeend", card)

// function liftUp(){
//     card.classList.add("card:hover")
// }

// card.addEventListener("mouseenter", liftUp())



// 2. keyboard event listeners
// 3. FORM nad inut events
// 4. window prowser events


//---------------this in eventlisteners--------------
// here this (not in arrow function) refers tot the elemnt which triggered it.
// as per the interpretetion of calling parent elemnt 

// btn.addEventListener("mousedown", function(){
//     this.style.backgroundColor="red"
// })

// btn.addEventListener("mouseup", function(){
//     this.style.backgroundColor="olivedrab"
// })

