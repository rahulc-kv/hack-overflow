/* eslint-disable no-unused-vars */
import { SVGProps } from 'react';

import { TAB_BAR_CONSTANTS } from '@constants/tabBar';

export type TabBarProps = {
  selectedTab: string;
  handleTabSelect: (tabId: string) => void;
  tabBarItems: TabBarItems[];
  wrapperStyle?: string;
  tabStyle?: string;
  customHeight?: string;
};

type TabBarItems = {
  id: TAB_BAR_CONSTANTS;
  label: string;
  activeIcon?: SVGProps<SVGSVGElement>;
  inactiveIcon?: SVGProps<SVGSVGElement>;
  isActive: boolean;
  minWidth: string;
};
