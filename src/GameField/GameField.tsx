import React, { FC } from 'react';
import { CellInfo } from '@src/Cell/models';
import { Cell } from '@src/Cell';
import styled from '@emotion/styled';

export const FieldContainer = styled.section`
  background: #fff;
`;

export interface IGameField {
  data: CellInfo[];
  onCellClick: (num: number) => void;
  width: number;
}

export const GameField: FC<IGameField> = ({ onCellClick, width, data }) => {
  const widthMinus1 = width - 1;
  const heightMinus1 = Math.floor(data.length / width) - 1;
  return (
    <FieldContainer role="cellsGrid">
      {data.map((item, index) => {
        const y = Math.floor(index / width);
        const x = index % width;
        const isRight = x === widthMinus1;
        const isBottom = y === heightMinus1;
        const isLeft = x === 0;
        return (
          <Cell
            key={`${y}-${x}`}
            num={index}
            alive={item === CellInfo.alive}
            onClick={onCellClick}
            isLeft={isLeft}
            isRight={isRight}
            isBottom={isBottom}
          />
        );
      })}
      <div style={{ clear: 'both' }} />
    </FieldContainer>
  );
};
