import React, { FC, useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Button, Tooltip } from '@components';
import { DownArrowIcon } from '@assets/icons';
import { SelectBoxProps, MenuType } from './types';
import COLORS from '@constants/colors';

const SelectBox: FC<SelectBoxProps> = ({
  menuItems = [],
  handleSelectBoxClick,
  customClass = 'text-base font-semibold text-primaryColor',
  downArrowStroke = COLORS.PRIMARY_COLOR,
  selectedOption = ''
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(
    selectedOption || menuItems?.[0].label
  );
  const [menuVisible, setMenuVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (selectedOption) {
      setSelectedItem(selectedOption);
    }
  }, [selectedOption]);

  const handleMenuClick = (item: MenuType) => {
    setSelectedItem(item.label);
    handleSelectBoxClick(item);
    setMenuVisibility(currentState => !currentState);
  };

  const renderSelectMenu = () => (
    <div className="flex flex-col items-start">
      {menuItems?.map(item => (
        <Button
          key={item.name}
          label={item.label}
          labelClass={`${
            selectedItem === item.label ? 'text-primaryColor' : 'text-davyGrey'
          } text-xs sm:text-sm`}
          onClick={() => handleMenuClick(item)}
        />
      ))}
    </div>
  );

  return (
    <div className="flex">
      <OutsideClickHandler onOutsideClick={() => setMenuVisibility(false)}>
        <Tooltip
          body={renderSelectMenu()}
          onHover={false}
          visibility={menuVisible}>
          <div
            className={`flex items-center cursor-pointer ${customClass}`}
            onClick={() => setMenuVisibility(currentState => !currentState)}>
            {selectedItem}
            <div className="ml-2">
              <DownArrowIcon
                className={`${menuVisible ? 'transform rotate-180' : ''}`}
                stroke={downArrowStroke}
              />
            </div>
          </div>
        </Tooltip>
      </OutsideClickHandler>
    </div>
  );
};

export default SelectBox;
