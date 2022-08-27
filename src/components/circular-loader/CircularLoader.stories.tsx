/* eslint-disable react/no-multi-comp */
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import CircularLoader from './CircularLoader';

export default {
  title: 'CircularLoader',
  decorators: [withKnobs]
};

export const Basic = () => <CircularLoader />;

export const DynamicVariables = () => {
  const isFullScreen = select('isFullScreen', [true, false], false);
  const height = select('height', ['h-[500px]', 'h-[900px]'], 'h-[500px]');
  return <CircularLoader isFullScreen={isFullScreen} height={height} />;
};
