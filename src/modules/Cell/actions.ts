import actionType from './actionType';
import ICellInfo from '@src/model/ICellInfo';

const setSelectedCell = (cellId: number, cellStatus: ICellInfo) => ({
  type: actionType.SET_SELECTED,
  payload: { cellId, cellStatus },
});

export { setSelectedCell };
