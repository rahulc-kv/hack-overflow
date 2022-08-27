import React, { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, InputAdornment } from '@mui/material';

import { CalenderIcon } from '@assets/icons';
import { DEFAULT_DATE_FORMAT } from '@constants/common';
import { TextField } from '@components';
import { DatePickerProps } from './types';

const CustomDatePicker: FC<DatePickerProps> = props => {
  const {
    name,
    placeholder,
    dateFormat = DEFAULT_DATE_FORMAT,
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
            <DatePicker
              label={placeholder}
              value={newDate}
              toolbarPlaceholder={placeholder}
              onChange={newValue => {
                setNewDate(newValue);
                onChange(newValue);
              }}
              renderInput={params => (
                <TextField {...params} name={name} errors={errors} />
              )}
              inputFormat={dateFormat}
              components={{ OpenPickerIcon: CalenderIcon }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalenderIcon />
                  </InputAdornment>
                )
              }}
              disableFuture={true}
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

export default CustomDatePicker;
