const ADD_SHOWN_COLOR = 'color/ADD_SHOWN_COLOR';
const CLEAR_SHOWN_COLORS = 'color/CLEAR_SHOWN_COLORS';

export const addShownColor = (tileId) => ({
  type: ADD_SHOWN_COLOR,
  payload: tileId,
});

export const clearShownColors = () => ({
  type: CLEAR_SHOWN_COLORS,
});

export const selectedColorReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOWN_COLOR:
      return [...state, action.payload];
    case CLEAR_SHOWN_COLORS:
      return [];
    default:
      return state;
  }
};
