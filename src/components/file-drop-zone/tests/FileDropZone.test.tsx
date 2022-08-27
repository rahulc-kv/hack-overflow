import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FileDropZone from '@components/file-drop-zone/FileDropZone';

const handleFileSelect = jest.fn();

test('FileDropZone drop', async () => {
  const component = render(
    <FileDropZone
      maxFileCount={5}
      handleFileSelect={handleFileSelect}
      isDisabled={true}
      currentUploadedFileCount={3}
      exchangeCode={'WRX'}
      fileFormats={'.xlsx'}
    />
  );
  expect(component).toMatchSnapshot();
});

test('File Dropped', () => {
  render(
    <FileDropZone
      maxFileCount={5}
      handleFileSelect={handleFileSelect}
      isDisabled={true}
      currentUploadedFileCount={3}
      exchangeCode={'WRX'}
      fileFormats={'.xlsx'}
    />
  );
  const dropInput = screen.getByTestId('dropInput');
  fireEvent.drop(dropInput, {
    DataTransfer: {
      files: [new File(['file'], 'test.xlsx', { type: '' })]
    }
  });
});

//TODO: Add the rejected scenario after writing test cases for all file components.
