import { combineReducers } from 'redux';
import { boardReduser } from './boardReducer';
import { foundTilesReducer } from './foundTilesReducer';
import { roundReducer } from './roundReducer';
import { selectedColorReducer } from './selectedColorReducer';

export const getRound = (state) => state.round;
export const getBoard = (state) => state.board;
export const getSelectedTiles = (state) => state.selectedTiles;
export const getFoundTiles = (state) => state.foundTiles;

export const rootReducer = combineReducers({
  round: roundReducer,
  board: boardReduser,
  selectedTiles: selectedColorReducer,
  foundTiles: foundTilesReducer,
});
