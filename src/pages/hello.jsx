import {Link} from "react-router";

class Hello extends React.Component{
    render(){
        return <div>hello!<Link to="/">go index</Link></div>;
    }
}
export default Hello;