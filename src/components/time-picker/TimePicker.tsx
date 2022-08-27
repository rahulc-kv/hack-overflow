import React, { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Grid, InputAdornment } from '@mui/material';

import { ClockIcon } from '@assets/icons';
import { DEFAULT_TIME_FORMAT } from '@constants/common';
import { TextField } from '@components';
import { TimePickerProps } from './types';

const CustomTimePicker: FC<TimePickerProps> = props => {
  const {
    name,
    placeholder,
    timeFormat = DEFAULT_TIME_FORMAT,
    control,
    defaultValue,
    errors,
    isDisabled = false
  } = props;

  const [newDate, setNewDate] = useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null
  );

  useEffect(() => {
    defaultValue && setNewDate(new Date(defaultValue));
  }, [defaultValue]);

  return (
    <Grid container={true}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label={placeholder}
              DialogProps={{
                PaperProps: {
                  sx: { '*': { outline: 'none' } }
                }
              }}
              PopperProps={{
                sx: { '*': { outline: 'none' } }
              }}
              value={newDate}
              views={['hours', 'minutes', 'seconds']}
              onChange={newValue => {
                setNewDate(newValue);
                onChange(newValue);
              }}
              renderInput={params => (
                <TextField {...params} name={name} errors={errors} />
              )}
              inputFormat={timeFormat}
              components={{ OpenPickerIcon: ClockIcon }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ClockIcon />
                  </InputAdornment>
                )
              }}
              ampm={true}
              showTodayButton={true}
              disabled={isDisabled}
            />
          </LocalizationProvider>
        )}
      />
      {!isEmpty(errors) && errors[name]?.message && (
        <p className="mt-[4px] text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </Grid>
  );
};

export default CustomTimePicker;
