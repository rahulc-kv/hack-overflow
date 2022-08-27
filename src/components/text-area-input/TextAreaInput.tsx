import React, { FC } from 'react';

import { TextAreaInputProps } from './types';

const TextAreaInput: FC<TextAreaInputProps> = props => {
  const { placeholder, name, register, errors, validation } = props;

  return (
    <div>
      <label className="relative cursor-text">
        <textarea
          name={name}
          {...register(name, validation)}
          className={`peer p-2 mt-2 w-full min-w-[150px] h-[114px] resize-none bg-white focus:bg-white outline-none
          rounded-[5px] border-[1px] border-davyGrey focus:border-primaryColor focus:outline-none
          transition duration-200
          ${errors[name] ? 'border-red-500 focus:border-red-500' : ''} `}
          placeholder=" "
          autoComplete="off"
        />
        <span
          className={`absolute -top-[90px] left-0 px-2  peer-placeholder-shown:text-[#B4B7BD] textarea-custom-label
          transition duration-200 ${
            errors[name]
              ? 'peer-focus:text-red-500'
              : 'peer-focus:text-primaryColor'
          }`}>
          {placeholder}
        </span>
      </label>
      <p className="mt-[4px] text-xs text-red-500">{errors[name]?.message}</p>
    </div>
  );
};

export default TextAreaInput;
