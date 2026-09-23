//approach 2 plain simple js for element creation:
// Step 1: Create an h1 element
// const heading = document.createElement("h1");
// Step 2: Add content to it
// heading.innerHTML = "Hello World from JavaScript";
// Step 3: Find the root container
// const root = document.getElementById("root");
// Step 4: Inject the heading into root
// root.appendChild(heading);

//approach 3: using react for creating h1 element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );
// // Create root
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// // Render
// root.render(heading);

// creating elements using react
// const heading = React.createElement("h1", {}, "hello from react")
// ReactDOM.createRoot(document.querySelector("#root")).render(heading)

// const box = React.createElement(
//   "div",
//   { id: "box1", className: "box" },
//   React.createElement("div", { id: "box2", className: "box" }, "box2"),
//   React.createElement("div", { id: "box2", className: "box" }, "box2"),
//   React.createElement("div", { id: "box2", className: "box" }, "box2"),
//   React.createElement("div", { id: "box2", className: "box" }, "box2"),
// );
// const root = ReactDOM.createRoot(document.querySelector("#root"))
// console.log(root)
//root.render(box)


