
export default (state={},action)=>{
	switch(action.type){
		case 'TASK_ADD':
		 state = {...state,[action.payload.user]:{...state[action.payload.user],[action.payload.task]:"0"}}
		 
		break;
		case 'TASK_COMPLETE':

		 state = {...state,[action.payload.user]:{...state[action.payload.user],[action.payload.task]:"1"}}
 
		break;
		case 'TASK_INCOMPLETE':
		 state = {...state,[action.payload.user]:{...state[action.payload.user],[action.payload.task]:"0"}}
		 
		break
		case 'TASK_REMOVE':
		let revertedList = {};
		Object.keys(state[action.payload.user]).forEach((taskKey)=>{
			 if(taskKey !==action.payload.task){
			 	revertedList[taskKey] = state[action.payload.user][taskKey]
			 	
			 } 
		});
		state = {...state,[action.payload.user]:{...revertedList}}
		break;
		default:
		break;

	}

	return state;
}