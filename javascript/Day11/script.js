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
