export const helperCreateBoard = (tilesNumber) => {
  const board = [];
  for (let i = 0; i < tilesNumber / 2; ++i) {
    const obj = {
      id: Math.random(),
      color: `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`,
    };
    board.push(obj, { ...obj, id: obj.id + 1 });
  }

  for (let j = board.length - 1; j > 0; --j) {
    const i = Math.floor(Math.random() * (j + 1));
    [board[i], board[j]] = [board[j], board[i]];
  }

  return board;
};
