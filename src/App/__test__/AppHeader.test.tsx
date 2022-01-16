import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from '@src/App/AppHeader';

describe('AppHeader', () => {
  it('Render <AppHeader>', () => {
    const { asFragment } = render(<AppHeader />);
    expect(asFragment()).toMatchSnapshot();
    const filterInput = screen.getByText(/Game of Life/gi);
    expect(filterInput).toBeInTheDocument();
  });
});
