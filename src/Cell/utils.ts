import { CellInfo } from '@src/Cell/models';

export const getInverted = (cell: CellInfo): CellInfo =>
  cell === CellInfo.alive ? CellInfo.dead : CellInfo.alive;
