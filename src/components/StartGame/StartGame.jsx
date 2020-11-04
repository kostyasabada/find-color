import React from 'react';
import './StartGame.scss';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/boardReducer';

export const StartGame = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="start__button"
        type="button"
        onClick={() => dispatch(createBoard(16))}
      >
        Easy level
      </button>
      <button
        className="start__button"
        type="button"
        onClick={() => dispatch(createBoard(36))}
      >
        Normal level
      </button>
      <button
        className="start__button"
        type="button"
        onClick={() => dispatch(createBoard(64))}
      >
        Difficult level
      </button>
    </>
  );
};
