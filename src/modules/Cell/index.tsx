import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { CELL_HEIGHT, CELL_WIDTH } from '@src/modules/Cell/constatnts';
import store from '@src/store';
import { setSelectedCell } from '@src/modules/Cell/actions';
import ICellInfo from '@src/model/ICellInfo';

interface IContainer {
  isRight?: boolean;
  isLeft?: boolean;
  isBottom?: boolean;
  frameColor?: string;
  alive?: boolean;
}
const Container = styled.div<IContainer>`
  display: block;
  width: ${({ isRight }) => CELL_WIDTH - (isRight ? 2 : 1)}px;
  height: ${({ isBottom }) => CELL_HEIGHT - (isBottom ? 2 : 1)}px;
  text-align: center;
  border-top: ${({ frameColor }) => `1px solid ${frameColor}`};
  border-left: ${({ frameColor }) => `1px solid ${frameColor}`};
  border-right: ${({ isRight, frameColor }) => `1px solid ${isRight ? frameColor : ''};`}
  border-bottom: ${({ isBottom, frameColor }) => `1px solid ${isBottom ? frameColor : ''};`}
  cursor: pointer;
  float: left;
  ${({ isLeft }) => (isLeft ? 'clear: both;' : '')}
  transition-property: background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background: #555;
  background: ${({ alive }) => (alive ? '#e44' : '#555')};
`;

interface IContent {
  alive?: boolean;
}
const Content = styled.span<IContent>`
  background: ${({ alive }) => (alive ? '#e44' : '#555')};
`;

export interface CellProps {
  num: number;
  status?: ICellInfo;
  isLeft?: boolean;
  isRight?: boolean;
  isBottom?: boolean;
}

const Cell: React.FC<CellProps> = ({
  num,
  status = ICellInfo.alive,
  isLeft = true,
  isRight = true,
}) => {
  const { dispatch } = useContext(store);

  const handleClick = () => {
    dispatch(setSelectedCell(num, +!status));
  };
  const frameColor = '#ddd';

  return (
    <Container
      role={`cellContainer-${num}`}
      onClick={handleClick}
      isRight={isRight}
      isLeft={isLeft}
      alive={!!status}
      frameColor={frameColor}
    >
      <Content role="cellContent" alive={!!status} />
    </Container>
  );
};

export default Cell;
