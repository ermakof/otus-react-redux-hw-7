const updateGameFieldByStatus = (
  cells: Array<number> = [],
  cellId: number,
  cellStatus: number = 1
) => cells.map((cell, ind) => (ind === cellId ? cellStatus : cell));

export default updateGameFieldByStatus;
