import React from 'react';
import { GameField } from './GameField';
import { render, screen, fireEvent } from '@testing-library/react';
import { CellInfo } from '@src/Cell/models';

let handleClick: (cellId: number) => void;
let data: CellInfo[];

describe('GameField', () => {
  beforeEach(() => {
    handleClick = jest.fn();
    data = [CellInfo.dead, CellInfo.dead, CellInfo.dead];
  });

  it('renders 3 cells from data:[3 items]', () => {
    const { asFragment } = render(<GameField data={data} onCellClick={handleClick} width={3} />);
    expect(asFragment()).toMatchSnapshot();
    const cellsGrid = screen.getByRole(/cellsGrid/gi);
    expect(cellsGrid).toBeInTheDocument();
    const cellContainer = screen.getAllByRole(/cellContainer/gi);
    expect(cellContainer.length).toBe(3);
  });

  it('calls onCellClick(<cell id>) callback when a cell is clicked', () => {
    render(<GameField data={data} onCellClick={handleClick} width={3} />);
    const cellContainer = screen.getAllByRole(/cellContainer/gi);
    fireEvent.click(cellContainer[1]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
