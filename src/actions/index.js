import types from '../action_types';
export const makeYourMove =(rowIndex, columnIndex, xo)=>{
	return ({
  type: types.MARK_MOVE,
  xo,
  rowIndex,
  columnIndex
})
}
export const addUser =(userData)=>{
	return ({
  	type: types.USER_ADDED,
  	payload:userData
})
}

export const addToDo = (taskData) => {
  
    return {
        type: types.TASK_ADD,
        payload: taskData
    }
};
export const markComplete = (taskData) => {
 
    return {
        type: types.TASK_COMPLETE,
        payload: taskData
    }
};
export const markInComplete = (taskData) => {
  
    return {
        type: types.TASK_INCOMPLETE,
        payload: taskData
    }
};
export const removeTask = (taskData) => {
  
    return {
        type: types.TASK_REMOVE,
        payload: taskData
    }
};
