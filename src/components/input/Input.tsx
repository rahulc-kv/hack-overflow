import React, { FC } from 'react';
import { isEmpty } from 'lodash';

import { InputProps } from './types';

const Input: FC<InputProps> = props => {
  const {
    placeholder,
    type = 'text',
    name,
    register,
    errors,
    validation
  } = props;

  return (
    <div>
      <label className="relative align-baseline cursor-text">
        <input
          name={name}
          {...register(name, validation)}
          className={`peer p-2 mt-2 w-full min-w-[150px] h-[54px] bg-white focus:bg-white outline-none text-sm
          rounded-[5px] border-[1px] border-davyGrey focus:border-primaryColor focus:outline-none
          transition duration-200
          ${errors[name] ? 'border-red-500 focus:border-red-500' : ''} `}
          type={type}
          placeholder=" "
          autoComplete="off"
        />
        <span
          className={`absolute top-[0px] left-0 px-2  peer-placeholder-shown:text-[#B4B7BD] text-sm input-custom-label
          transition duration-200 ${
            errors[name]
              ? 'peer-focus:text-red-500'
              : 'peer-focus:text-primaryColor'
          }`}>
          {placeholder}
        </span>
      </label>
      {!isEmpty(errors) && errors[name]?.message && (
        <p className="mt-[4px] text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Input;
