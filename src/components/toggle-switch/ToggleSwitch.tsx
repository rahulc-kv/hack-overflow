import React, { FC } from 'react';
import { Switch } from '@mui/material';
import { Controller } from 'react-hook-form';

import { ToggleSwitchProps } from './types';
import COLORS from '@constants/colors';

const switchSX = {
  '& .MuiSwitch-switchBase': {
    color: COLORS.CLOUDY_BLUE,
    '&.Mui-disabled': {
      opacity: 0.8,
      color: COLORS.CLOUDY_BLUE,
      '& + .MuiSwitch-track': {
        opacity: 0.8,
        backgroundColor: COLORS.SOFT_PEACH
      }
    },
    '& + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: COLORS.SOFT_PEACH
    },
    '&.Mui-checked': {
      color: COLORS.FRENCH_BLUE,
      '&.Mui-disabled': {
        opacity: 0.8,
        color: COLORS.CLOUDY_BLUE,
        '& + .MuiSwitch-track': {
          opacity: 0.8,
          backgroundColor: COLORS.TROPICAL_BLUE
        }
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: COLORS.TROPICAL_BLUE
      }
    }
  }
};

const ToggleSwitch: FC<ToggleSwitchProps> = props => {
  const { name, control, isDisabled = false } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Switch
          size="small"
          sx={switchSX}
          onChange={onChange}
          checked={value}
          disabled={isDisabled}
        />
      )}
    />
  );
};

export default ToggleSwitch;
