import React from 'react';
import { render, screen } from '@testing-library/react';

import AppBody from '@src/App/AppBody';
import Store from '@src/store';
import { IAction } from '@src/model';

let dispatch: (action: IAction) => void;

describe('AppBody', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('Render <AppBody> without data', () => {
    const state = {
      gameFieldSize: 0,
      gameFieldData: [],
    };
    const { asFragment } = render(
      <Store.Provider value={{ dispatch, state }}>
        <AppBody />
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const dataMessage = screen.getByRole(/dataMessage/gi);
    expect(dataMessage).toBeInTheDocument();
  });

  it('Render <AppBody> with data', () => {
    const state = {
      gameFieldSize: 3,
      gameFieldData: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
    const { asFragment } = render(
      <Store.Provider value={{ dispatch, state }}>
        <AppBody />
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const dataList = screen.getByRole(/dataList/gi);
    expect(dataList).toBeInTheDocument();
    const dataItems = screen.getAllByRole(/cellContainer/gi);
    expect(dataItems.length).toBe(9);
  });
});
