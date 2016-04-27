import {SlidePageLayout, SlidePage} from "components/slide-page-layout.jsx";
import PageLayout from "components/page-layout.jsx";

class TestSlidePageLayout extends React.Component {
	render() {
		return (
			<PageLayout>
				<SlidePageLayout>
					<SlidePage>1</SlidePage>
					<SlidePage>2</SlidePage>
				</SlidePageLayout>
			</PageLayout>
		);
	}
}

export default TestSlidePageLayout;