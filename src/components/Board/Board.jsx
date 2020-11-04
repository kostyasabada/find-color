/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useCallback, useEffect } from 'react';
import classnames from 'classnames';
import './Board.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBoard, getFoundTiles, getRound, getSelectedTiles,
} from '../../redux/rootReducer';
import { addShownColor, clearShownColors } from '../../redux/selectedColorReducer';
import { addFoundTiles, clearFoundTiles } from '../../redux/foundTilesReducer';
import { addRound, clearRound } from '../../redux/roundReducer';
import { clearBoard } from '../../redux/boardReducer';

export const Board = () => {
  const round = useSelector(getRound);
  const board = useSelector(getBoard);
  const selectedTiles = useSelector(getSelectedTiles);
  const foundTiles = useSelector(getFoundTiles);
  const dispatch = useDispatch();

  const handleClick = useCallback((tileId) => {
    if (selectedTiles.includes(tileId)) {
      return;
    }
    dispatch(addShownColor(tileId));
  }, [dispatch, selectedTiles]);

  useEffect(() => {
    if (selectedTiles.length === 2) {
      setTimeout(() => {
        if (
          selectedTiles[0] - selectedTiles[1] === 1 || selectedTiles[0] - selectedTiles[1] === -1
        ) {
          dispatch(addFoundTiles(selectedTiles));
        } else {
          dispatch(addRound());
        }
        dispatch(clearShownColors());
      }, 1500);
    }
  }, [dispatch, selectedTiles]);

  const newGame = useCallback(() => {
    dispatch(clearBoard());
    dispatch(clearFoundTiles());
    dispatch(clearShownColors());
    dispatch(clearRound());
  }, [dispatch]);

  return (
    <div>
      {board.length > foundTiles.length && (
        <p>{`ROUND: ${round}`}</p>
      )}
      <div className="board">
        {board.length > foundTiles.length && (
          <ul
            className={classnames('board__list', {
              board__list_not_active: selectedTiles.length === 2,
            })}
            style={{
              maxWidth: `${Math.sqrt(board.length) * 80}px`,
            }}
          >
            {board.map((tile) => (
              <li
                key={tile.id}
                className={classnames('board__item', {
                  board__item_selected: selectedTiles.includes(tile.id),
                  board__item_found: foundTiles.includes(tile.id),
                })}
                onClick={() => handleClick(tile.id, tile.color)}
                style={{
                  backgroundColor: selectedTiles.includes(tile.id)
                  && `${tile.color}`,
                }}
                onKeyDown={({ key }) => {
                  if (key === 'Enter') {
                    handleClick(tile.id, tile.color);
                  }
                }}
                role="button"
              />
            ))}
          </ul>
        )}

        {board.length === foundTiles.length && (
          <h2>{`You played ${round} rounds to win`}</h2>
        )}

        <button
          className="board__button"
          type="button"
          onClick={newGame}
        >
          New game
        </button>
      </div>
    </div>
  );
};
