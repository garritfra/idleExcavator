import React from "react";
import ReactDOM from "react-dom";
import BigDouble from "model/BigDouble"

ReactDOM.render(<h1>Hello World</h1>, Document.getElementById("root"));


let d1 = new BigDouble(1.25223, 24);
console.log(d1.toString());