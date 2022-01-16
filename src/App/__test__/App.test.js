import React from 'react';

import { render } from '@testing-library/react';
import App from '@src/App';

test('render App', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
