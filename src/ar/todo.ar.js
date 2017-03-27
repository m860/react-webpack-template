/**
 * Created by jean.h.ma on 2/22/17.
 */

const TODO_ADD=0
const TODO_REMOVE=1

const initialState={
	list:[
		'test'
	]
}

export function add(payload){
	return{
		type:TODO_ADD,
		payload
	}
}

export function remove(payload){
	return {
		type:TODO_REMOVE,
		payload
	}
}

export default function(state=initialState,action={}){
	switch (action.type){
		case TODO_ADD:
			return $update(state,{
				list:{$push:[action.payload]}
			});
		case TODO_REMOVE:
			return $update(state,{
				list:{
					$splice:[[action.payload,1]]
				}
			})
		default:
			return state;
	}
}
