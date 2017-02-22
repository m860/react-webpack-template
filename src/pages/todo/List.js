/**
 * Created by jean.h.ma on 2/22/17.
 */
import BasePage from '../BasePage'
import NavigationBar from '../../components/NavigationBar'
import Layout from '../../components/Layout'
import {connect} from 'react-redux'
import {add, remove} from '../../ar/todo.ar'

const style = {
	input: {
		margin: '10px',
		backgroundColor: 'silver',
		borderRadius: '10px',
		fontSize: '2rem',
		color: 'white',
		padding: '5px 10px',
		flex: 1
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
		console.log('render')
		return (
			<Layout>
				<NavigationBar title="TODO"/>
				<div>
					<input type="text" style={style.input}
						   ref="todo"
						   placeholder="Please input todo"/>
					<button onClick={event=> {
						this.props.add(this.refs.todo.value);
						this.refs.todo.value = '';
					}}>ADD
					</button>
				</div>
				<div style={style.list}>
					{this.props.list.map((item, index)=> {
						return (
							<div
								style={Object.assign({}, style.listItem, {backgroundColor: index % 2 === 1 ? 'silver' : 'white'})}
								key={index}>
								<a className="fa fa-close"
								   onClick={event=> {
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