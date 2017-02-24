/**
 * Created by jean.h.ma on 2/22/17.
 */
import {
	createAction
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
		state.list.splice(action.payload,1);
		return {
			list:[...state.list]
		}
	}
},{
	list:[
		'test'
	]
})