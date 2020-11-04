const ADD_ROUND = 'round/ADD_ROUND';
const CLEAR_ROUND = 'round/CLEAR_ROUND';

export const addRound = () => ({
  type: ADD_ROUND,
});

export const clearRound = () => ({
  type: CLEAR_ROUND,
  payload: 1,
});

export const roundReducer = (round = 1, action) => {
  switch (action.type) {
    case ADD_ROUND:
      return round + 1;
    case CLEAR_ROUND:
      return action.payload;
    default:
      return round;
  }
};
