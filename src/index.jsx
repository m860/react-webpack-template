require("bower/normalize-css/normalize.css");
import SlideBox from "./components/slidebox.jsx";
import SlideBoxItem from "./components/slidebox_item.jsx";

let view = document.getElementById("view");

ReactDom.render(
    <SlideBox>
			<SlideBoxItem></SlideBoxItem>
			<SlideBoxItem></SlideBoxItem>
			<div>abc</div>
		</SlideBox>
    , view);