// let h1 = document.createElement("h1");
// h1.innerHTML = "Learning React";

// let rootE1 = document.getElementById("root")
// rootE1.appendChild(h1);

// let h1 = React.createElement("h1",null,"Hello react");

// let rootE1 = document.getElementById("root");
// ReactDOM.render(h1, rootE1);

// let element = React.createElement("div", null,
//     React.createElement("h1",null, "lo gi m aa gya react padhne")
// );

// let rootE1 = document.getElementById("root");
// ReactDOM.render(element, rootE1);

// REACT -> JSX -> JAVASCRIPT XML

let element = <h1>Hello JSX Format</h1>
let rootE1 = document.getElementById("root");
ReactDOM.render(element, rootE1);

// Babel -> compiler -> jsx -> js
// sare components ko bundle karne k liye webpack bhi chaiye