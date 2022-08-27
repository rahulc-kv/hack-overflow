export const eventKeyMapper = {
  addTransactionsInTransactions: 'ADD_TRANSACTION_IN_TRANSACTIONS',
  syncInDashboard: 'SYNC_IN_DASHBOARD',
  profileEdit: 'PROFILE_EDIT',
  taxRuleEdit: 'TAXATION_RULE_EDIT',
  subscriptionSettings: 'SUBSCRIPTION_SETTINGS',
  planSelect: 'PLAN_SELECT',
  syncInSources: 'SYNC_IN_SOURCES',
  linkInSources: 'LINK_IN_SOURCES',
  transactionForm: 'TRANSACTION_FORM',
  genericFileUpload: 'GENERIC_FILE_UPLOAD',
  taxReportDownload: 'TAX_REPORT_DOWNLOAD',
  transactionExport: 'TRANSACTION_EXPORT',
  exchangeCardClick: 'EXCHANGE_CARD_CLICK',
  supportClick: 'SUPPORT_BTN_CLICK',
  upgradePlanFromNav: 'UPGRADE_PLAN_FROM_NAV'
};

export const eventObjMapper = {
  SYNC_IN_DASHBOARD: {
    category: 'Sync Transactions Btn',
    action: 'Sync Transactions Btn clicked in dashboard'
  },
  PROFILE_EDIT: {
    category: 'Profile Edit Btn',
    action: 'Profile Edit Btn clicked'
  },
  TAXATION_RULE_EDIT: {
    category: 'Taxtion Rule Edit Btn',
    action: 'Taxation Rule Edit Btn clicked'
  },
  SUBSCRIPTION_SETTINGS: {
    category: 'Subscription Settings Btn',
    action: 'Subscription Settings Btn clicked'
  },

  PLAN_SELECT: {
    category: 'Select Plan Btn',
    action: 'Select Plan Btn clicked'
  },
  SYNC_IN_SOURCES: {
    category: 'Sync All Transactions',
    action: 'Sync All Transactions Btn clicked in Sources page'
  },
  LINK_IN_SOURCES: {
    category: 'Link Transaction Btn',
    action: 'Link Transactions btn clicked in source page'
  },
  TRANSACTION_FORM: {
    category: 'Add transaction form accessed',
    action: 'Add Transaction Form Accessed'
  },
  GENERIC_FILE_UPLOAD: {
    category: 'Upload Generic File Click',
    action: 'Upload Generic File clicked'
  },
  TAX_REPORT_DOWNLOAD: {
    category: 'Download Tax report Btn',
    action: 'Download Tax report btn clicked'
  },
  TRANSACTION_EXPORT: {
    category: 'Export Transaction Btn',
    action: 'Export Transactions Btn clicked'
  },
  ADD_TRANSACTION_IN_TRANSACTIONS: {
    category: 'Add Transcation',
    action: 'Add Transactions Btn clicked in Transactions page'
  },
  EXCHANGE_CARD_CLICK: {
    category: 'Exchange Card Click',
    action: 'Exchange Card clicked'
  },
  SUPPORT_BTN_CLICK: {
    category: 'Support Btn Click',
    action: 'Support Btn clicked'
  },
  UPGRADE_PLAN_FROM_NAV: {
    category: 'Upgrade Plan from Nav Menu click',
    action: 'Upgrade Plan from Nav Menu clicked'
  }
};
