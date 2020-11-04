const ADD_FOUND_TILES = 'found/ADD_FOUND_TILES';
const CLEAR_FOUND_TILES = 'found/CLEAR_FOUND_TILES';

export const addFoundTiles = (shownArr) => ({
  type: ADD_FOUND_TILES,
  payload: shownArr,
});

export const clearFoundTiles = () => ({
  type: CLEAR_FOUND_TILES,
  payload: [],
});

export const foundTilesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FOUND_TILES:
      return [...state, action.payload].flat();
    case CLEAR_FOUND_TILES:
      return action.payload;
    default:
      return state;
  }
};
