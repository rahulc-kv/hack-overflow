import React, { forwardRef, ReactChild } from 'react';
import { VariableSizeList } from 'react-window';

import { useResetCache } from '@hooks';
import { LISTBOX_PADDING } from '@constants/common';
import {
  InnerElementContext,
  OuterElementContext,
  OuterElementType
} from './OuterElementType';
import { ListBoxComponentProps } from './types';
import ListItemRow from './ListItem';

const itemSize = 36;
const renderItemCount = 8;

const ListBoxComponent = forwardRef<HTMLDivElement, ListBoxComponentProps>(
  (props, ref) => {
    const {
      children,
      hidden,
      showCheckBox = false,
      showId = false,
      selectedValues = '',
      handleCheckBoxClick = () => {},
      ...other
    } = props;

    const itemData: ReactChild[] = [];

    (children as ReactChild[]).forEach((item: ReactChild) => {
      itemData.push(item);
    });

    const itemCount = itemData.length;

    const gridRef = useResetCache(itemCount);

    const getHeight = () => {
      if (itemCount > renderItemCount) {
        return renderItemCount * itemSize;
      }
      return itemData.length * itemSize;
    };

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <InnerElementContext.Provider
            value={{
              tooltipVisibility: hidden,
              showCheckBox,
              selectedValues,
              showId,
              handleCheckBoxClick
            }}>
            <VariableSizeList
              itemData={itemData}
              height={getHeight() + 2 * LISTBOX_PADDING} // 2 * for top and bottom padding
              width="100%"
              ref={gridRef}
              outerElementType={OuterElementType}
              innerElementType="ul"
              itemSize={() => itemSize}
              overscanCount={5}
              itemCount={itemCount}>
              {ListItemRow}
            </VariableSizeList>
          </InnerElementContext.Provider>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

export default ListBoxComponent;
