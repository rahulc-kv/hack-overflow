import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Accordian from '../Accordian';

const handleClick = jest.fn();

test('Accordian Rendered', () => {
  const component = renderer
    .create(
      <Accordian
        dataTestId="accordianHeading"
        styleConfig={{
          accordianStyle: '',
          accordianIconStyle: ''
        }}
        contentConfig={{
          accordianHeading: '',
          accordianBody: '',
          handleOnClickHeading: handleClick
        }}
        conditionalFlag={{
          showDetails: true,
          chevronDownPresent: true
        }}
      />
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});

test('Accordian Clicked', () => {
  render(
    <Accordian
      dataTestId="accordianHeading"
      styleConfig={{
        accordianStyle: '',
        accordianIconStyle: ''
      }}
      contentConfig={{
        accordianHeading: '',
        accordianBody: '',
        handleOnClickHeading: handleClick
      }}
      conditionalFlag={{
        showDetails: true,
        chevronDownPresent: true
      }}
    />
  );
  fireEvent.click(screen.getByTestId('accordianHeading'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
