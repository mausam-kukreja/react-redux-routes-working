export const initialState ='o';
export default (state = initialState, action) =>  {
  switch (action.type) {
    case 'MARK_MOVE':
      const nextState = (state === 'o') ? 'x' : 'o';
      return nextState;
    default:
      return state;
  }
};