import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import FileUploader from '../FileUploader';

const handleOnChange = jest.fn();

test('FileUploader rendered', () => {
  const component = render(
    <FileUploader
      label={'Test'}
      name={'Test'}
      acceptedFormats=""
      handleOnChange={handleOnChange}
    />
  );
  expect(component).toMatchSnapshot();
});

test('FileUploader Click', () => {
  const { getByTestId } = render(
    <FileUploader
      label={'Test'}
      name={'Test'}
      acceptedFormats=""
      handleOnChange={handleOnChange}
    />
  );
  fireEvent.change(getByTestId('fileUploaderInput'), { target: { value: '' } });
  expect(handleOnChange).toBeCalled();
});
