import React from 'react';
import { useForm } from 'react-hook-form';
import renderer from 'react-test-renderer';

import Autocomplete from '../Autocomplete';

test('Autocomplete Rendered', () => {
  const Component = () => {
    const { control } = useForm<{ value: string }>({
      defaultValues: {
        value: ''
      }
    });

    return (
      <Autocomplete name={''} placeholder={''} control={control} options={[]} />
    );
  };

  const component = renderer.create(<Component />).toJSON();

  expect(component).toMatchSnapshot();
});
