import React, { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { MenuItem, InputLabel, FormControl, Select } from '@mui/material';

import { SelectDropdowndProps } from './types';
import { DownArrowBlack } from '@assets/icons';
import COLORS from '@constants/colors';

const selectSX = {
  width: '100%',
  height: '54px',
  backgroundColor: COLORS.WHITE,
  '& .MuiSelect-icon': {
    top: '50%',
    marginRight: '16px'
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.GREY_CLOUD,
    borderRadius: '5px',
    borderWidth: '1px'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.PRIMARY_COLOR,
    borderRadius: '5px',
    borderWidth: '1px'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.GREY_CLOUD
  },
  '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.GREY_CLOUD
  }
};

const inputLabelSX = {
  '&.MuiInputLabel-shrink': {
    color: COLORS.BLACK_GREEN
  },
  '&.Mui-focused': {
    color: COLORS.PRIMARY_COLOR
  }
};

const SelectDropdown: FC<SelectDropdowndProps> = props => {
  const {
    placeholder,
    name,
    control,
    dropdownLOV,
    errors,
    isDisabled = false,
    selectedItem = '',
    onChangeHandler = () => null
  } = props;

  const [selectedOption, setSelectedOption] = useState(selectedItem);

  useEffect(() => {
    setSelectedOption(selectedItem);
  }, [selectedItem]);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="w-full">
            <FormControl fullWidth>
              <InputLabel id="selectDropdownLabel" sx={inputLabelSX}>
                {placeholder}
              </InputLabel>
              <Select
                labelId="selectDropdownLabel"
                label={placeholder}
                value={selectedOption}
                sx={selectSX}
                IconComponent={DownArrowBlack}
                disabled={isDisabled}
                error={Boolean(!isEmpty(errors) && errors[name]?.message)}
                onChange={event => {
                  setSelectedOption(event.target.value);
                  onChange(event);
                  onChangeHandler(event.target.value);
                }}>
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
            </FormControl>
          </div>
        )}
      />
    </>
  );
};

export default SelectDropdown;
