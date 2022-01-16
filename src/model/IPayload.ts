import ICellInfo from '@src/model/ICellInfo';

interface IPayload {
  gameFieldSize?: number;
  cellStatus?: ICellInfo;
  cellId?: number;
}

export default IPayload;
