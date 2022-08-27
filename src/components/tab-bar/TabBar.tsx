import React, { FC, useCallback } from 'react';

import { translate } from '@utils/locale';
import { TabBarProps } from './type';

const TabBar: FC<TabBarProps> = props => {
  const {
    selectedTab,
    handleTabSelect,
    tabBarItems,
    tabStyle,
    customHeight,
    wrapperStyle
  } = props;

  const handleClick = (tabId: string, isActive: boolean) => {
    if (!isActive) {
      return;
    }
    document.getElementById(tabId).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
    handleTabSelect(tabId);
  };

  const getTextColor = useCallback(
    (tabId: string, isActive: boolean) => {
      if (selectedTab === tabId) {
        return 'text-primaryColor';
      } else if (!isActive) {
        return 'text-slateGrey';
      }
      return 'text-davyGrey';
    },
    [selectedTab]
  );

  return (
    <div
      className={`flex overflow-x-auto items-end ${
        customHeight ? customHeight : 'h-[70px]'
      } bg-white customTransparentScroll ${wrapperStyle ? wrapperStyle : ''}`}>
      {tabBarItems.map(tabItem => (
        <div
          id={tabItem.id}
          key={tabItem.id}
          className={`flex  items-center ${
            tabItem.minWidth
          } ml-8 pb-1 cursor-pointer border-b-2
           ${
             selectedTab === tabItem.id ? 'border-primaryColor' : 'border-white'
           } ${tabStyle}`}
          onClick={() => handleClick(tabItem.id, tabItem.isActive)}>
          {selectedTab === tabItem.id
            ? tabItem.activeIcon
            : tabItem.inactiveIcon}
          <div
            className={`ml-1 sm:text-base text-sm font-semibold ${getTextColor(
              tabItem.id,
              tabItem.isActive
            )}`}>
            {tabItem.label}
          </div>
          {!tabItem.isActive && (
            <div className="px-1 ml-2 text-[10px] font-normal text-center text-primaryColor bg-harp rounded-md">
              {translate('comingSoon')}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
