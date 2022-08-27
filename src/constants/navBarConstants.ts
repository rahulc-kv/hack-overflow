import {
  HomeIcon,
  ReportIcon,
  SourcesIcon,
  TransactionsIcon,
  SettingsIcon,
  ConnectExchangeIcon
} from '@assets/icons';
import COLORS from './colors';

export const NAV_BAR_CONSTANTS = [
  {
    navText: 'Dashboard',
    icon: HomeIcon,
    path: '/dashboard',
    iconDefaultFill: 'transparent',
    iconSelectedFill: COLORS.PRIMARY_COLOR,
    iconDefaultStroke: COLORS.SLATE_GREY,
    iconSelectedStroke: 'transparent'
  },
  {
    navText: 'My Transactions',
    icon: TransactionsIcon,
    path: '/transaction',
    iconDefaultFill: COLORS.SLATE_GREY,
    iconSelectedFill: COLORS.PRIMARY_COLOR,
    iconDefaultStroke: 'transparent',
    iconSelectedStroke: 'transparent'
  },
  {
    navText: 'My Sources',
    icon: SourcesIcon,
    path: '/source',
    iconDefaultFill: 'transparent',
    iconSelectedFill: COLORS.PRIMARY_COLOR,
    iconDefaultStroke: COLORS.SLATE_GREY,
    iconSelectedStroke: 'transparent'
  },
  {
    navText: 'Connect Exchange',
    icon: ConnectExchangeIcon,
    path: '/connect-exchange',
    iconDefaultFill: 'transparent',
    iconSelectedFill: 'transparent',
    iconDefaultStroke: COLORS.SLATE_GREY,
    iconSelectedStroke: COLORS.PRIMARY_COLOR
  },
  {
    navText: 'Tax Report',
    icon: ReportIcon,
    path: '/tax-report',
    iconDefaultFill: 'transparent',
    iconSelectedFill: COLORS.PRIMARY_COLOR,
    iconDefaultStroke: COLORS.SLATE_GREY,
    iconSelectedStroke: COLORS.WHITE
  },
  {
    navText: 'Settings',
    icon: SettingsIcon,
    path: '/settings',
    iconDefaultFill: COLORS.SLATE_GREY,
    iconSelectedFill: COLORS.PRIMARY_COLOR,
    iconDefaultStroke: 'transparent',
    iconSelectedStroke: 'transparent'
  }
];
