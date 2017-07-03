export const initialState = {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', '']
};
export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'MARK_MOVE':
      const {xo, rowIndex, columnIndex} = action;
      const nextState = {...state};
      nextState[rowIndex][columnIndex] = xo;
      return nextState;
    default:
      return state;
  }
};