import React, { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { MenuItem, Select } from '@mui/material';

import { DownArrowWhite } from '@assets/icons';
import { SelectFieldProps } from './types';
import COLORS from '@constants/colors';

const sxClass = {
  width: '100%',
  height: '54px',
  backgroundColor: COLORS.SECONDARY_COLOR,
  color: COLORS.WHITE,
  borderRadius: '0px 6px 6px 0px',
  '&.Mui-disabled .MuiOutlinedInput-input': {
    color: COLORS.WHITE,
    opacity: '0.5',
    WebkitTextFillColor: COLORS.WHITE
  },
  '& .MuiSelect-icon': {
    top: '50%'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
};

const CustomSelect: FC<SelectFieldProps> = props => {
  const {
    placeholder,
    name,
    control,
    dropdownLOV,
    errors,
    selectedItem,
    isDisabled
  } = props;

  const [selectedOption, setSelectedOption] = useState(
    selectedItem || 'default'
  );

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="w-full">
            <Select
              value={selectedOption}
              disabled={isDisabled}
              sx={sxClass}
              error={Boolean(!isEmpty(errors) && errors[name]?.message)}
              onChange={event => {
                setSelectedOption(event.target.value);
                onChange(event);
              }}
              IconComponent={DownArrowWhite}>
              <MenuItem value={'default'} disabled={true}>
                {placeholder}
              </MenuItem>
              {dropdownLOV?.map(option => (
                <MenuItem value={option.id} key={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            {!isEmpty(errors) && errors[name]?.message && (
              <p className="mt-[4px] text-xs text-red-500">
                {errors[name]?.message}
              </p>
            )}
          </div>
        )}
      />
    </>
  );
};
export default CustomSelect;
