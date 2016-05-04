import ShortAudio from "components/short-audio.jsx";
import PageLayout from "components/page-layout.jsx";

export default class TestShortAudio extends React.Component{
	render(){
		return (
			<PageLayout>
				<ShortAudio ops={{
					src:require("assets/sounds/test.mp3")
					// ,loop:true
					,autoplay:true
				}}></ShortAudio>
			</PageLayout>
		);
	}
}