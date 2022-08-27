/* eslint-disable no-unused-vars */
import { FC, ReactNode, SVGProps } from 'react';

export type TopBarProps = {
  title?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonConfig?: ButtonConfig;
  secondaryButtonConfig?: ButtonConfig;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  showNavigateBack?: boolean;
  handleBackClick?: () => void;
  showFilter?: boolean;
  selectFilterMenu?: Array<MenuType>;
  handleSelectBoxClick?: (value: MenuType) => void;
  showInfoIcon?: boolean;
  infoIconContent?: ReactNode;
};

type ButtonConfig = {
  buttonHandler?: () => void;
  buttonLabel?: string;
  icon?: FC<SVGProps<SVGElement>>;
  customClass?: string;
  iconClass?: string;
};

type MenuType = {
  name: string;
  label: string;
};
