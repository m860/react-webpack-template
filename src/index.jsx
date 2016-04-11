require("bower/normalize-css/normalize.css");
import Hello from "./components/hello.jsx";

let view = document.getElementById("view");

ReactDom.render(
    <Hello></Hello>
    , view);