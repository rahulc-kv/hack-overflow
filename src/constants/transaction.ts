import { TRANSACTION_TYPES } from '@constants/common';

export const TRANSACTION_TYPE_LABEL = {
  [TRANSACTION_TYPES.buy]: 'Buy',
  [TRANSACTION_TYPES.sell]: 'Sell',
  [TRANSACTION_TYPES.trade]: 'Trade',
  [TRANSACTION_TYPES.transferIn]: 'Transfer In',
  [TRANSACTION_TYPES.transferOut]: 'Transfer Out',
  [TRANSACTION_TYPES.deposit]: 'Deposit',
  [TRANSACTION_TYPES.withdrawal]: 'Withdrawal'
};

export const TRANSFER_IN_TEXT = 'Transferred from others';
export const TRANSFER_IN_TEXT_INTERNAL = 'Transferred from self';

export const TRANSFER_OUT_TEXT = 'Transferred to others';
export const TRANSFER_OUT_TEXT_INTERNAL = 'Transferred to self';
