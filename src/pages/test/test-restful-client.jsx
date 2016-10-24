import BasePage from "../../utility/basePage.jsx";
import Layout from "../../components/layout.jsx";
import RESTfulClient from "mkp-restful-client";

const rest=new RESTfulClient();

export default class TestRESTfulClient extends BasePage{
	render(){
		return (
			<Layout>
				<button onClick={event=>{
					rest.request({
						url:"https://api.github.com/users/mralexgray/repos"
					}).then(response=>{
						console.log(response);
					})
				}}>fetch</button>
			</Layout>
		);
	}
}