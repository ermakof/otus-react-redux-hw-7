import React from 'react';
import { Cell } from '@src/Cell';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Cell', () => {
  it('renders <Cell> using renderer cell with value=2', () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<Cell num={2} onClick={handleClick} />);
    expect(asFragment()).toMatchSnapshot();
    const cellContainer = screen.getByRole(/cellContainer/gi);
    expect(cellContainer).toBeInTheDocument();
    const cellContent = screen.getByRole(/cellContent/gi);
    expect(cellContent).toBeInTheDocument();
  });

  it('Click on cell', () => {
    let receivedCellNumber = 0;
    const handleClick = (cellNumber: number) => {
      receivedCellNumber = cellNumber;
    };
    render(<Cell num={2} onClick={handleClick} />);
    const cellContainer = screen.getByRole(/cellContainer/i);
    fireEvent.click(cellContainer);
    expect(receivedCellNumber).toEqual(2);
  });
});
