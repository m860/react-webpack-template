import {TabPageLayout,TabPageContent} from "components/tab-page-layout.jsx";

export default class TestTabPage extends React.Component{
	render(){
		return(
			<TabPageLayout tabs={[1,2,3]}>
				<TabPageContent>1</TabPageContent>
				<TabPageContent>2</TabPageContent>
				<TabPageContent>3</TabPageContent>
			</TabPageLayout>
		);
	}
}