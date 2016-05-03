import {Link} from "react-router";
import PageLayout from "components/page-layout.jsx";

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		};
	}

	getMessage() {
		return new Promise((resolve)=> {
			setTimeout(()=> {
				resolve("hi,i am a async message");
			}, 2000);
		});
	}

	render() {
		return (
			<PageLayout>
				<div style={{height:"100%",backgroundColor:"gray"}}>
					<h1 style={{margin:0,padding:0}}>Page 1</h1>
					<Link to="/page2"> /page2 </Link>
					<button onClick={
					async ()=>{
						let message=await this.getMessage();
						this.setState({message});
					}
				}>show message
					</button>
					<p>{this.state.message}</p>
				</div>
			</PageLayout>
		);
	}
}
export default Hello;