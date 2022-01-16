import React from 'react';
import GameField from '../index';
import { render, screen } from '@testing-library/react';
import Store from '@src/store';
import { IAction, IState } from '@src/model';

let handleClick: (cellId: number) => void;
let dispatch: (action: IAction) => void;
let state: IState;

describe('GameField', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    handleClick = jest.fn();
    state = {
      gameFieldSize: 9,
      gameFieldData: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  });

  it('renders 9 cells from data:[9 items]', () => {
    const { asFragment } = render(
      <Store.Provider value={{ dispatch, state }}>
        <GameField />
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const cellsGrid = screen.getByRole(/cellsGrid/gi);
    expect(cellsGrid).toBeInTheDocument();
    const cellContainer = screen.getAllByRole(/cellContainer/gi);
    expect(cellContainer.length).toBe(9);
  });
});
