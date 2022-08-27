import React, { FC } from 'react';

import { IfProps } from './type';

const If: FC<IfProps> = ({ condition, children }) => {
  if (!condition) return null;
  return <>{children}</>;
};

export default If;
