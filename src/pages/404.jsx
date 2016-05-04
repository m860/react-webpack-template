import PageLayout from "components/page-layout.jsx";
// import {History} from "react-router";

class NoMatch extends React.Component{
	render(){
		return (
			<PageLayout>
				<div><button onClick={()=>{
					window.history.back();
				}}><i className="fa fa-arrow-circle-left"></i> Back</button></div>
				<p>no path is matched!</p>
			</PageLayout>
		);
	}
}

export default NoMatch;