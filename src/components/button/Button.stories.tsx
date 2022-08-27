/* eslint-disable react/no-multi-comp */
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'TailWindButton',
  decorators: [withKnobs]
};

export const Basic = () => (
  <Button
    onClick={() => null}
    className={'text-white bg-primaryColor'}
    label={'Submit'}
  />
);

export const DynamicVariables = () => {
  const label = select('label', ['Submit', 'Cancel'], 'Docs');
  return (
    <Button
      onClick={() => null}
      className={'text-white bg-primaryColor'}
      label={label}
    />
  );
};
