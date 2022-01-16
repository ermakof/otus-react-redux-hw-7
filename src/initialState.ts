import { IState } from '@src/model';
import createGameField from '@src/utils/createGameField';

const INIT_GAME_FIELD_SIZE = 9;

const initialState: IState = {
  gameFieldSize: INIT_GAME_FIELD_SIZE,
  gameFieldData: createGameField(INIT_GAME_FIELD_SIZE * INIT_GAME_FIELD_SIZE),
};

export default initialState;
