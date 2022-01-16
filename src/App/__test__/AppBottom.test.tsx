import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBottom from '@src/App/AppBottom';

describe('AppBody', () => {
  it('Render <AppBottom> without data', () => {
    const { asFragment } = render(<AppBottom />);
    expect(asFragment()).toMatchSnapshot();
    const dataMessage = screen.getByText(/Результат/gi);
    expect(dataMessage).toBeInTheDocument();
  });
});
