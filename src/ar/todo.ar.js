/**
 * Created by jean.h.ma on 2/22/17.
 */
import {
	createAction
	, handleAction
	, handleActions
} from 'redux-actions'

export const add = createAction('add')
export const remove = createAction('remove')

export default handleActions({
	[add]:(state, action)=>{
		return {
			list:[...state.list,action.payload]
		};
	},
	[remove]:(state, action)=>{
		// state.list.splice(action.payload)
		// return state;
		// let ns=Object.assign({},state);
		// ns.list.splice(action.payload);
		// return ns;
		// let nl=[...state.list];
		// nl.splice(action.payload);
		state.list.splice(action.payload);
		return {
			list:[...state.list]
		}
	}
},{
	list:[
		'test'
	]
})