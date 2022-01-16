import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { CELL_SIZE } from '@src/modules/Cell/constatnts';
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
  width: ${({ isRight }) => CELL_SIZE - (isRight ? 2 : 1)}px;
  height: ${({ isBottom }) => CELL_SIZE - (isBottom ? 2 : 1)}px;
  text-align: center;
  border-top: ${({ frameColor }) => `1px solid ${frameColor}`};
  border-left: ${({ frameColor }) => `1px solid ${frameColor}`};
  border-right: ${({ isRight, frameColor }) => `1px solid ${isRight ? frameColor : ''};`}
  border-bottom: ${({ isBottom, frameColor }) => `1px solid ${isBottom ? frameColor : ''};`}
  float: left;
  ${({ isLeft }) => (isLeft ? 'clear: both;' : '')}
  transition-property: background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background: #555;
  background: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: white #9e9e9e #9e9e9e white;  
`;

interface IContent {
  alive?: boolean;
}
const Content = styled.div<IContent>`
  cursor: pointer;
  background: #ffff00;
  border-radius: 50%;
  background: ${({ alive }) => (alive ? '#ffff0070' : '#ffff00')};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 5px;
  border: 0.6vh solid transparent;
  border-color: ${({ alive }) => (alive ? '#9e9e9e' : '#555')};

  :hover {
    background: #ffff00;
  }
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
      isRight={isRight}
      isLeft={isLeft}
      alive={!!status}
      frameColor={frameColor}
    >
      <Content role="cellContent" alive={!!status} onClick={handleClick} />
    </Container>
  );
};

export default Cell;
