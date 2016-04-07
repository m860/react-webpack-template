import React from "react";
import ReactDom from "react-dom";

//jsx引用必须大写
import Hello from "./components/hello.jsx";

var view = document.getElementById("view");

ReactDom.render(
    <Hello></Hello>
    , view);