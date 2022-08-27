/* eslint-disable no-unused-vars */
import React from 'react';

import {
  CloudUploadIcon,
  ConnectExchangeIcon,
  PlusCircleBlue,
  PlusCircleGray,
  WalletIcon
} from '@assets/icons';
import COLORS from './colors';

export enum TAB_BAR_CONSTANTS {
  ASSET = 'asset',
  SOURCE = 'sources',
  ADD_EXCHANGE = 'add_exchange',
  ADD_TRANSACTION = 'add_transaction',
  IMPORT_FILE = 'import_file',
  ADD_WALLET = 'add_wallet',
  CONNECT_EXCHANGES = 'connect_exchanges'
}

export const TAB_BAR_ITEMS = {
  dashboardPage: [
    {
      id: TAB_BAR_CONSTANTS.ASSET,
      label: 'Asset',
      isActive: true,
      minWidth: 'sm:min-w-[150px] min-w-[70px]'
    },
    {
      id: TAB_BAR_CONSTANTS.SOURCE,
      label: 'Sources',
      isActive: true,
      minWidth: 'sm:min-w-[150px] min-w-[70px]'
    }
  ],
  sourcePage: [
    {
      id: TAB_BAR_CONSTANTS.ADD_EXCHANGE,
      label: 'Connect Exchange',
      activeIcon: <PlusCircleBlue />,
      inactiveIcon: <PlusCircleGray />,
      isActive: true,
      minWidth: 'min-w-[168px]'
    },
    {
      id: TAB_BAR_CONSTANTS.IMPORT_FILE,
      label: 'Import CSV/Excel',
      activeIcon: <PlusCircleBlue />,
      inactiveIcon: <PlusCircleGray />,
      isActive: true,
      minWidth: 'min-w-[156px]'
    },
    {
      id: TAB_BAR_CONSTANTS.ADD_TRANSACTION,
      label: 'Add Transaction',
      activeIcon: <PlusCircleBlue />,
      inactiveIcon: <PlusCircleGray />,
      isActive: true,
      minWidth: 'min-w-[150px]'
    },
    {
      id: TAB_BAR_CONSTANTS.ADD_WALLET,
      label: 'Add Wallet',
      activeIcon: <PlusCircleBlue />,
      inactiveIcon: <PlusCircleGray />,
      isActive: false,
      minWidth: 'min-w-[190px]'
    }
  ],
  connectExchange: [
    {
      id: TAB_BAR_CONSTANTS.CONNECT_EXCHANGES,
      label: 'Exchanges',
      activeIcon: (
        <ConnectExchangeIcon fill="none" stroke={COLORS.PRIMARY_COLOR} />
      ),
      inactiveIcon: (
        <ConnectExchangeIcon fill="none" stroke={COLORS.SLATE_GREY} />
      ),
      isActive: true,
      minWidth: 'min-w-[110px]'
    },
    {
      id: TAB_BAR_CONSTANTS.ADD_WALLET,
      label: 'Add Wallet',
      activeIcon: <WalletIcon fill="none" stroke={COLORS.PRIMARY_COLOR} />,
      inactiveIcon: <WalletIcon fill="none" stroke={COLORS.SLATE_GREY} />,
      isActive: false,
      minWidth: 'min-w-[190px]'
    }
  ],
  connectExchangePopup: [
    {
      id: TAB_BAR_CONSTANTS.ADD_EXCHANGE,
      label: 'Connect Exchange',
      activeIcon: (
        <ConnectExchangeIcon fill="none" stroke={COLORS.PRIMARY_COLOR} />
      ),
      inactiveIcon: (
        <ConnectExchangeIcon fill="none" stroke={COLORS.DAVY_GREY} />
      ),
      isActive: true,
      minWidth: 'min-w-[170px]'
    },
    {
      id: TAB_BAR_CONSTANTS.IMPORT_FILE,
      label: 'File Upload',
      activeIcon: <CloudUploadIcon fill="none" stroke={COLORS.PRIMARY_COLOR} />,
      inactiveIcon: <CloudUploadIcon fill="none" stroke={COLORS.DAVY_GREY} />,
      isActive: true,
      minWidth: 'min-w-[115px]'
    }
  ]
};
