require("bower/normalize-css/normalize.css");
import Hello from "./components/hello.jsx";

var view = document.getElementById("view");

ReactDom.render(
    <Hello></Hello>
    , view);