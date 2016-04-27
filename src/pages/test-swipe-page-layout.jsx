import {SwipePageLayout, SwipePage} from "components/swipe-page-layout.jsx";
import PageLayout from "components/page-layout.jsx";

class TestSlidePageLayout extends React.Component {
	render() {
		return (
			<PageLayout>
				<SwipePageLayout>
					<SwipePage>1</SwipePage>
					<SwipePage>2</SwipePage>
				</SwipePageLayout>
			</PageLayout>
		);
	}
}

export default TestSlidePageLayout;