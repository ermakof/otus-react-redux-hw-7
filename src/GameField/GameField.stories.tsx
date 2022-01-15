import React, { FC, useState, useEffect } from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { GameField } from '@src/GameField/index';
import { CellInfo } from '@src/Cell/models';
import { getInverted } from '@src/Cell/utils';

export default {
  component: GameField,
  decorators: [withKnobs],
  title: 'Example/GameField',
};

const START_WIDTH = 3;
const START_HEIGHT = 3;
const START_DATA: CellInfo[] = [];

export const Dynamic: FC = () => {
  const width = number('Width, cells', START_WIDTH);
  const height = number('Height, cells', START_HEIGHT);
  const showAll = boolean('showAll', false);

  const [data, setData] = useState(START_DATA);

  useEffect(() => {
    const cellsNumber = width * height;
    const startCellState = showAll ? CellInfo.alive : CellInfo.dead;
    const newData: CellInfo[] = [];
    for (let i = 0; i < cellsNumber; i++) {
      newData.push(startCellState);
    }
    setData(newData);
  }, [width, height, showAll]);

  const handleCellClick = (num: number) => {
    if (num < 0 || num >= data.length) {
      return;
    }

    const newData = data.concat();
    newData[num] = getInverted(newData[num]);
    setData(newData);
  };

  return <GameField data={data} onCellClick={handleCellClick} width={width} />;
};
