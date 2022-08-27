import React, { createContext, forwardRef, useContext } from 'react';

import { InnerElementContextProps } from './types';

export const OuterElementContext = createContext<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
>({});

export const InnerElementContext = createContext<InnerElementContextProps>({
  tooltipVisibility: false,
  showCheckBox: false,
  selectedValues: '',
  showId: false,
  handleCheckBoxClick: () => {}
});

export const OuterElementType = forwardRef<HTMLDivElement>((prop, ref) => {
  const outerProps = useContext(OuterElementContext);

  return <div ref={ref} {...prop} {...outerProps} />;
});
