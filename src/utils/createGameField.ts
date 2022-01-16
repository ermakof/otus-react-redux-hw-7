const createGameField = (size: number) => {
  const arr = Object.keys([...Array(size)]).map(() => Math.floor(Math.random() * 2));
  return arr;
};

export default createGameField;
