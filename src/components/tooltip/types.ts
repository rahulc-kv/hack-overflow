import React, { ReactNode } from 'react';

export type TooltipProps = {
  backgroundColor?: string;
  body: ReactNode;
  children?: ReactNode;
  onHover?: boolean;
  onTop?: boolean;
  visibility?: boolean;
  tooltipRef?: React.MutableRefObject<any>;
  outerClass?: string;
  innerClass?: string;
  contentNoWrap?: boolean;
};
