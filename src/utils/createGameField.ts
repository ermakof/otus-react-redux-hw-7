const createGameField = (size: number, status: number) =>
  Object.keys([...Array(size)]).map(() => status);

export default createGameField;
