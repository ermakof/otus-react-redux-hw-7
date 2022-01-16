import { IAction, IState } from '@src/model';
import GameFieldActions from '@src/modules/GameField/actionType';
import CellActions from '@src/modules/Cell/actionType';
import { ICellInfo } from '@src/modules/Cell/models';
import initialState from '@src/initialState';
import createGameField from '@src/utils/createGameField';
import updateGameFieldByStatus from '@src/utils/updateGameFieldByStatus';

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case GameFieldActions.SET_SIZE: {
      const { gameFieldSize = initialState.gameFieldSize } = action.payload || {};
      const cellsNumber = gameFieldSize * gameFieldSize;
      return {
        ...state,
        gameFieldSize: gameFieldSize,
        gameFieldData: createGameField(cellsNumber),
      };
    }

    case CellActions.SET_SELECTED: {
      const { cellStatus = ICellInfo.alive, cellId = 0 } = action.payload || {};
      return {
        ...state,
        gameFieldData: updateGameFieldByStatus(state.gameFieldData, cellId, cellStatus),
      };
    }
  }
};

export default reducer;
