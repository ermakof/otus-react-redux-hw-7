import React, { FC, useEffect, useState } from 'react';
import '@src/App.css';
import { GameField } from '@src/GameField';
import { CellInfo } from '@src/Cell/models';
import { getInverted } from '@src/Cell/utils';

const START_WIDTH = 3;
const START_HEIGHT = 3;

const App: FC = () => {
  const width = START_WIDTH;
  const height = START_HEIGHT;
  const showAll = false;

  const [data, setData] = useState<Array<CellInfo>>([]);

  useEffect(() => {
    const cellsNumber = width * height;
    const startCellState = showAll ? CellInfo.alive : CellInfo.dead;
    const newData: CellInfo[] = [];
    for (let i = 0; i < cellsNumber; i = i + 1) {
      newData.push(startCellState);
    }
    setData(newData);
  }, [width, height, showAll]);

  const handleClick = (cellId: number) => {
    if (cellId < 0 || cellId >= data.length) {
      return;
    }

    const newData = data.concat();
    newData[cellId] = getInverted(newData[cellId]);
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Game of Life</p>
      </header>
      <GameField data={data} onCellClick={handleClick} width={width} />
    </div>
  );
};

export default App;
