import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SearchBar from './SearchBar';

export default {
  title: 'Search bar',
  decorators: [withKnobs]
};

export const Basic = () => (
  <SearchBar searchValue="" handleChange={() => null} />
);
