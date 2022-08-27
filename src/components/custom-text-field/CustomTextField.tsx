/* eslint-disable no-unused-vars */
import React, { FC, KeyboardEvent } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextFieldProps } from '@mui/material/TextField';
import { isEmpty } from 'lodash';

import { InfoIconGrey } from '@assets/icons';
// import { removeInvalidNumericCharactersOnInput } from '@utils/generalUtils';
import { CustomTextFieldProps } from './types';
import COLORS from '@constants/colors';

const CustomInputField = styled(TextField)({
  '& input.MuiOutlinedInput-input': {
    padding: '15.5px 14px'
  },
  '& label': {
    width: '80%'
  },
  '& label.Mui-focused': {
    color: COLORS.PRIMARY_COLOR,
    width: 'auto'
  },
  '& .MuiInputLabel-shrink': {
    color: COLORS.BLACK_GREEN,
    width: 'auto'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.GREY_CLOUD,
      borderRadius: '5px',
      borderWidth: '1px'
    },
    '&:hover fieldset': {
      borderColor: COLORS.GREY_CLOUD
    },
    '&.Mui-disabled fieldset': {
      borderColor: COLORS.GREY_CLOUD
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.PRIMARY_COLOR,
      borderRadius: '5px',
      borderWidth: '1px'
    }
  }
});

const CustomTextField: FC<CustomTextFieldProps & TextFieldProps> = props => {
  const {
    isControlledField = false,
    control,
    autoComplete = '',
    name,
    placeholder,
    rows,
    multiline,
    type = 'text',
    errors,
    onCut = () => {},
    onCopy = () => {},
    onPaste = () => {},
    showInfoIcon = false,
    endAdornment,
    infoText = '',
    isDisabled = false
  } = props;

  // seperating out customClass from props, because MUI textField doesn't support customClass as a prop
  const { customClass = {}, testid = 'text-field', ...remainingProps } = props;

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    // if (type === 'number') {
    //   removeInvalidNumericCharactersOnInput(e);
    // }
  };

  return isControlledField ? (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <CustomInputField
            name={name}
            autoComplete={autoComplete}
            label={placeholder}
            rows={rows}
            multiline={multiline}
            error={Boolean(!isEmpty(errors) && errors[name]?.message)}
            onCut={onCut}
            onCopy={onCopy}
            onPaste={onPaste}
            className="w-full"
            inputProps={{ 'data-testid': testid }}
            InputProps={{
              ...(showInfoIcon && {
                endAdornment: endAdornment || (
                  <Tooltip title={infoText} arrow={true} enterTouchDelay={0}>
                    <InfoIconGrey className="cursor-default" />
                  </Tooltip>
                )
              })
            }}
            onKeyPress={handleKeyPress}
            type={type}
            disabled={isDisabled}
            sx={customClass}
            {...field}
          />
          {!isEmpty(errors) && errors[name]?.message && (
            <p className="mt-[4px] text-xs text-red-500">
              {errors[name]?.message}
            </p>
          )}
        </>
      )}
    />
  ) : (
    <CustomInputField
      className="w-full"
      {...remainingProps}
      InputProps={{
        ...{
          ...remainingProps.InputProps,
          autoComplete: 'off',
          'data-testid': testid
        }
      }}
      sx={customClass}
      error={Boolean(!isEmpty(errors) && errors[name]?.message)}
    />
  );
};

export default CustomTextField;
