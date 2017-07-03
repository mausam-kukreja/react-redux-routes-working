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