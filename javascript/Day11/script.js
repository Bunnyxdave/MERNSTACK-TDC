//console.log("Day 11 - DOM ")

//Manipulating the DOM - attributes and properties

// const heading = document.querySelector("h1");
// const headingClass = heading.getAttribute("class");
// console.log(headingClass);
// heading.setAttribute("class", "mainHeading");
// console.log(heading.getAttribute("class"));
// heading.setAttribute("id", "mainHeading");
// heading.setAttribute("style", "color: blue;")

//example1:
// getting the id pf an element
// const mainImg = document.getElementById("mainImg");
// console.log(mainImg.getAttribute("id"));

//OR

//example2:
// const mainImg = document.querySelector("#mainImg");
// let mainImg = document.querySelector("#mainImg");
// console.log(mainImg));

//example3:
// //change the image source
// const image1 = document.querySelectorAll(".oldImg")
// // console.log(image1)
// // NodeList(3) [img.oldImg, img.oldImg, img.oldImg]
// const src1 = image1[0].getAttribute("src");
// image1[0].setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhazTd0BHRGg2S0kNgjzIezivHcSCC49UPz7DfQbs7w&s=10");

//----------MANUPILATING STYLES (INLINE)

//example1:
// const heading = document.querySelector("h1");
// heading.style.backgroundColor = "blue";
// heading.style.color = "white";
// heading.style.fontSize = "50px";
// heading.style.textAlign = "center";

//example2:
// const mainImg = document.querySelector("#mainImg");
// mainImg.style.borderRadius = 50 + "px";
// mainImg.style.boxShadow = "0 0 10px " + "aqua";
// mainImg.style.border = "10px solid yellow"

// //example3:
// const head4 = document.querySelector("h4");
// head4.style.color = "red";
// head4.style.display ="none"

//----------CLASSLIST - add, remove, toggle, contains

//example1:
// const heading = document.querySelector("#heading1")
// heading.classList.add("mainHeading")

// heading.classList.remove("mainHeading")

// heading.classList.toggle("mainHeading")

// heading.classList.contains("mainHeading") //returns true or false

//---------------NAVIGATION (DOM TRAVERSAL)

//example1:
// let box = document.querySelector(".box")
// // console.dir(box)
// let boxParent = box.parentElement
// console.dir(boxParent)

//example2:
// const images = document.querySelectorAll("img")
// images.forEach((image) => {
//     console.log(image.getAttribute("class"))
// })

// let h4 = document.querySelector("h4")
// const paraParent = h4.parentElement
// console.log(paraParent.getAttribute("class"))

//example3:
// const listElem = document.querySelector("li")
// console.dir(listElem)

// console.log(listElem.nextElementSibling)

//example4:
// const ul = document.querySelector("ul")
// const ulparent = ul.parentElement

// const ulsibling = ul.nextElementSibling;
// console.dir(ulsibling)
// ulsibling.style.border ="2px solid white"

// ulparent.style.backgroundColor = "red"

//--------creating and adding element

//USING inserAdjacentElement() =>

// const circle = document.createElement("div") //creating elemnt
// circle.style.border ="2px solid white"
// circle.style.width ="100px"
// circle.style.height ="100px"
// circle.style.borderRadius ="50%"
// circle.style.backgroundColor= "skyblue"

// document.body.insertAdjacentElement("beforeend", circle) //adding elemnt

// lets break down the syntax of adding elemnt :
// first -> where the elemnt is to be added? ==> here document.body
// then use the method insertAdjacentElement("position", what elemnt is adding?)

// positions :
// beforeend,  afterend
// beforebegin, afterbeign

// appendChild(element) - Add to the END of parent
// const circle = document.createElement("div"); //creating elemnt
// circle.style.border = "2px solid white";
// circle.style.width = "100px";
// circle.style.height = "100px";
// circle.style.borderRadius = "50%";
// circle.style.backgroundColor = "skyblue";

// let h1= document.querySelector("h1")
// h1.appendChild(circle)

//USING append()
// append(element) - Modern version, add to END
// const circle = document.createElement("div") //creating elemnt
// circle.style.border ="2px solid white"
// circle.style.width ="100px"
// circle.style.height ="100px"
// circle.style.borderRadius ="50%"
// circle.style.backgroundColor= "skyblue"

// document.body.append(circle)
