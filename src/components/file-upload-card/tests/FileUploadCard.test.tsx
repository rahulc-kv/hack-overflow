import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import FileUploadCard from '../FileUploadCard';

const handleUploadAbort = jest.fn();

test('FileUploadCard rendered', () => {
  const component = render(
    <FileUploadCard
      id={'asfdsds'}
      fileName={'report'}
      status={'success'}
      handleClose={handleUploadAbort}
    />
  );
  expect(component).toMatchSnapshot();
});

test('FileUploadCard Success Close', () => {
  const { getByTestId } = render(
    <FileUploadCard
      id={'ashjkfsd'}
      fileName={'transactionReport'}
      status={'success'}
      handleClose={handleUploadAbort}
    />
  );
  fireEvent.click(getByTestId('closeSuccess'));
  expect(handleUploadAbort).toHaveBeenCalled();
});

test('FileUploadCard Uploading Close', () => {
  const { getByTestId } = render(
    <FileUploadCard
      id={'testid'}
      fileName={'transactionReport'}
      status={'uploading'}
      handleClose={handleUploadAbort}
    />
  );
  fireEvent.click(getByTestId('closeUploading'));
  expect(handleUploadAbort).toHaveBeenCalled();
});

test('FileUploadCard Failed Close', () => {
  const { getByTestId } = render(
    <FileUploadCard
      id={'testid'}
      fileName={'transactionReport'}
      status={'failed'}
      handleClose={handleUploadAbort}
    />
  );
  fireEvent.click(getByTestId('closeFailed'));
  expect(handleUploadAbort).toHaveBeenCalled();
});
