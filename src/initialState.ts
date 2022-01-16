import { IState } from '@src/model';
import createGameField from '@src/utils/createGameField';

const INIT_GAME_FIELD_SIZE = 3;

const initialState: IState = {
  gameFieldSize: INIT_GAME_FIELD_SIZE,
  gameFieldData: createGameField(INIT_GAME_FIELD_SIZE * INIT_GAME_FIELD_SIZE, 1),
};

export default initialState;
