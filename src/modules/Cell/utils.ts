import { ICellInfo } from '@src/modules/Cell/models';

export const getInverted = (cell: ICellInfo): ICellInfo =>
  cell === ICellInfo.alive ? ICellInfo.dead : ICellInfo.alive;
