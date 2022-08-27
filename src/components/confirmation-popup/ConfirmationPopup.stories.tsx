/* eslint-disable react/no-multi-comp */
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import ConfirmationPopup from './ConfirmationPopup';

export default {
  title: 'ConfirmationPopup',
  decorators: [withKnobs]
};

const dummyData = {
  buttonOneText: 'Cancel',
  buttonTwoText: 'Submit',
  message: 'Dummy Message',
  title: 'Dummy Title'
};

export const Basic = () => (
  <ConfirmationPopup
    buttonOneText={dummyData.buttonOneText}
    buttonTwoText={dummyData.buttonTwoText}
    message={dummyData.message}
    onButtonOneClick={() => {}}
    onButtonTwoClick={() => {}}
    onCloseButtonClick={() => {}}
    title={dummyData.title}
    visibility={true}
  />
);

export const DynamicVariables = () => {
  const isOpen = select('isOpen', [true, false], false);
  return (
    <ConfirmationPopup
      buttonOneText={dummyData.buttonOneText}
      buttonTwoText={dummyData.buttonTwoText}
      message={dummyData.message}
      onButtonOneClick={() => {}}
      onButtonTwoClick={() => {}}
      onCloseButtonClick={() => {}}
      title={dummyData.title}
      visibility={isOpen}
    />
  );
};
