import React from 'react';
import { render } from '@testing-library/react';

import HorizontalLoader from '../HorizontalLoader';

test('HorizontalLoader rendered', () => {
  const component = render(<HorizontalLoader customWidth="w-[70%]" />);
  expect(component).toMatchSnapshot();
});
