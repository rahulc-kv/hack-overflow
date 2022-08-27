/* eslint-disable no-unused-vars */

export type SelectBoxProps = {
  menuItems?: Array<MenuType>;
  handleSelectBoxClick?: (value: MenuType) => void;
  customClass?: string;
  downArrowStroke?: string;
  selectedOption?: string;
};

export type MenuType = {
  name: string;
  label: string;
};
