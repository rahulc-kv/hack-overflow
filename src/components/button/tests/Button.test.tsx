import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from '../Button';

const handleClick = jest.fn();

test('Button Rendered', () => {
  const component = renderer.create(<Button onClick={handleClick} />).toJSON();
  expect(component).toMatchSnapshot();
});

test('Button Clicked', () => {
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByTestId('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
