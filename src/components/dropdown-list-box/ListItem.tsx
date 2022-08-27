import React, { useContext, useState } from 'react';
import { ListChildComponentProps } from 'react-window';
import { Box, Tooltip } from '@mui/material';

import { InnerElementContext } from './OuterElementType';
import { LISTBOX_PADDING } from '@constants/common';

const ListItemRow = (prop: ListChildComponentProps) => {
  const { data, index, style } = prop;

  const {
    tooltipVisibility,
    showCheckBox,
    selectedValues,
    showId,
    handleCheckBoxClick
  } = useContext(InnerElementContext);

  const [isOpen, setIsOpen] = useState(false);

  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING
  };

  const handleCheck = event => {
    const checked = selectedValues ? selectedValues.split(',') : [];
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    handleCheckBoxClick(updatedList.join(','));
  };

  return (
    <Box component="li" style={inlineStyle} id={dataSet?.id}>
      <div className="flex flex-row items-center m-4">
        {showCheckBox && (
          <input
            type="checkbox"
            id={dataSet?.id}
            name={dataSet?.name}
            value={dataSet?.id}
            className="mr-2 cursor-pointer"
            onChange={handleCheck}
            checked={selectedValues.split(',').includes(dataSet?.id)}
          />
        )}
        <Tooltip
          title={dataSet?.name}
          arrow={true}
          placement={`${showCheckBox ? 'bottom' : 'left-start'}`}
          enterTouchDelay={0}
          open={isOpen && !tooltipVisibility}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          <div
            className={`overflow-hidden text-sm font-medium text-davyGrey
           text-ellipsis whitespace-nowrap ${
             showCheckBox ? 'cursor-default' : 'cursor-pointer'
           }`}
            id={dataSet?.id}>
            {`${showId ? dataSet?.id + '-' : ''} ${dataSet?.name}`}
          </div>
        </Tooltip>
      </div>
    </Box>
  );
};

export default ListItemRow;
