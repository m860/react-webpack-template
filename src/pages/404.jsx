import Layout from "../components/layout.jsx";
import BasePage from "../utility/basePage.jsx";

export default class NoMatch extends BasePage {

	render() {
		return (
			<Layout>
				<table style={{height: "100%", width: "100%"}}>
					<tbody>
					<tr>
						<td style={{textAlign: "center", fontSize: "2rem"}}>404</td>
					</tr>
					</tbody>
				</table>
			</Layout>
		);
	}
}

