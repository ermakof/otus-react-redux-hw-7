import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from '@src/App/AppHeader';

describe('AppHeader', () => {
  it('Render <AppHeader>', () => {
    const { asFragment } = render(<AppHeader />);
    expect(asFragment()).toMatchSnapshot();
    const title = screen.getByText(/Lines/gi);
    expect(title).toBeInTheDocument();
    const button = screen.getByRole(/button/gi);
    expect(button).toBeInTheDocument();
    const select = screen.getByRole(/select/gi);
    expect(select).toBeInTheDocument();
  });
});
