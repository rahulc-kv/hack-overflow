import React, { FC } from 'react';

import { HorizontalLoaderProps } from './types';

const HorizontalLoader: FC<HorizontalLoaderProps> = props => {
  const { customWidth = 'w-[50%]' } = props;
  return (
    <div
      className={`overflow-hidden relative ${customWidth} h-3 bg-white rounded-xl`}>
      <div
        className="absolute w-[200%] h-full bg-gradient-to-r from-blueBell  
    via-lightGrey to-blueBell rounded-xl animate-slide-infinite"
      />
    </div>
  );
};

export default HorizontalLoader;
