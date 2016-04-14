import SlideBoxItem from "./slidebox_item.jsx"

class SlideBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>{this.props.children}</div>;
    }
    static get propTypes(){
        return {
            children(props){

                let result=null;

                if(!props.children || props.children.length<=0){
                    return new Error("SlideBox's children is required");
                }

                for(let item of props.children){
                    if(item.type!==SlideBoxItem){
                        result=new Error(`${item.type} is not SlideBoxItem`);
                        break;
                    }
                }

                return result;
            }
        };
    }
}

export default SlideBox;