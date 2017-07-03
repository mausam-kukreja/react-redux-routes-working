export default (state=null,action)=>{
	switch(action.type){
		case 'USER_ADDED':
		state = {...state,[action.payload.name]:action.payload};
		break;
		default:
		break;
		
	}
	return state;
}