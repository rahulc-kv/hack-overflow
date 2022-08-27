/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export type AccordianProps = {
  styleConfig: StyleConfig;
  contentConfig: ContentConfig;
  conditionalFlag: ContitionalFlag;
  dataTestId?: string;
};

type StyleConfig = {
  accordianStyle: string;
  accordianHeadingWrapperStyle?: string;
  accordianIconStyle?: string;
};

type ContentConfig = {
  accordianBody: ReactNode;
  accordianHeading: ReactNode;
  handleOnClickHeading: (key?: number) => void;
};

type ContitionalFlag = {
  chevronDownPresent?: boolean;
  showDetails: boolean;
  disableOnClick?: boolean;
};
