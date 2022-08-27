import React from 'react';
import renderer from 'react-test-renderer';

import Circularloader from '../CircularLoader';

test('Full-screen Circularloader Rendered', () => {
  const component = renderer
    .create(
      <div>
        <Circularloader isFullScreen={false} />
      </div>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
