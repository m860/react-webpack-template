/**
 * Created by jean.h.ma on 2/22/17.
 */
import BasePage from '../BasePage'
import NavigationBar from '../../components/NavigationBar'
import Layout from '../../components/Layout'
import {connect} from 'react-redux'
import {add, remove} from '../../ar/todo.ar'

@connect(({todo})=> {
	return {
		list: todo.list
	};
}, dispatch=> {
	return {
		add: payload=> {
			dispatch(add(payload))
		},
		remove: payload=> {
			dispatch(remove(payload))
		}
	};
})
export default class List extends BasePage {

	render() {
		return (
			<Layout>
				<NavigationBar title="TODO"/>
				<div>
					<input type="text" style={style.input}
						   ref="todo"
						   placeholder="Please input todo"/>
					<button onClick={()=> {
						this.props.add(this.refs.todo.value);
						this.refs.todo.value = '';
					}} style={style.addButton}>ADD
					</button>
				</div>
				<div style={style.list}>
					{this.props.list.map((item, index)=> {
						return (
							<div
								style={Object.assign({}, style.listItem, {backgroundColor: index % 2 === 1 ? 'silver' : 'white'})}
								key={index}>
								<a className="fa fa-close"
								   onClick={()=> {
									   this.props.remove(index);
								   }}
								   style={{fontSize: '2rem', marginRight: '10px'}}></a>
								<span style={{fontSize: '2rem'}}>{item}</span>
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
}

const style = {
	input: {
		margin: '10px 0 10px 10px',
		//backgroundColor: 'silver',
		//borderRadius: '10px',
		borderTopLeftRadius: '10px',
		borderBottomLeftRadius: '10px',
		fontSize: '2rem',
		//color: 'white',
		padding: '5px 10px',
		flex: 1,
		border:'solid 1px black',
		borderRight:'none'
	},
	addButton: {
		margin: '10px 10px 10px 0',
		borderTopRightRadius: '10px',
		borderBottomRightRadius: '10px',
		border:'solid 1px black',
		borderLeft:'none',
		padding:'auto 10px'
	},
	list: {
		flexDirection: 'column'
	},
	listItem: {
		padding: '5px 10px',
		fontSize: '2rem',
		alignItems: 'center'
	}
}