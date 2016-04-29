import {SwipePageLayout, SwipePage} from "components/swipe-page-layout.jsx";
import PageLayout from "components/page-layout.jsx";

export default class TestSlidePageLayout extends React.Component {
	render() {
		return (
			// you can set direction="horizontal" , default is vertical
			<PageLayout>
				<SwipePageLayout>
					<SwipePage>1</SwipePage>
					<SwipePage>2</SwipePage>
				</SwipePageLayout>
			</PageLayout>
		);
	}
}
