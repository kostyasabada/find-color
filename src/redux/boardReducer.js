import { helperCreateBoard } from './helper';

const CREATE_BOARD = 'board/CREATE_BOARD';
const CLEAR_BOARD = 'board/CLEAR_BOARD';

export const createBoard = (tilesNumber) => ({
  type: CREATE_BOARD,
  payload: helperCreateBoard(tilesNumber),
});

export const clearBoard = () => ({
  type: CLEAR_BOARD,
  payload: [],
});

export const boardReduser = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOARD:
    case CLEAR_BOARD:
      return action.payload;
    default:
      return state;
  }
};
