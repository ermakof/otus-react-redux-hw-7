import ICellInfo from '@src/model/ICellInfo';

export interface IState {
  gameFieldSize: number;
  gameFieldData: Array<ICellInfo>;
}
