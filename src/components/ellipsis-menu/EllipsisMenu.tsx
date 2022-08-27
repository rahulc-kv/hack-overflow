import React, { FC } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Button, Tooltip } from '@components';
import { EllipsisMenuProps } from './types';

const EllipsisMenu: FC<EllipsisMenuProps> = props => {
  const { children, actionItems, visibilty, ellipsisRef, onOutsideClick } =
    props;

  const renderMenu = () => (
    <div className="flex flex-col items-start">
      {actionItems?.map(item => (
        <Button
          key={item.label}
          Icon={item.Icon}
          label={item.label}
          labelClass="text-black"
          onClick={item.onClick}
        />
      ))}
    </div>
  );

  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <Tooltip
        body={renderMenu()}
        onHover={false}
        visibility={visibilty}
        onTop={false}
        tooltipRef={ellipsisRef}>
        {children}
      </Tooltip>
    </OutsideClickHandler>
  );
};

export default EllipsisMenu;
