/* eslint-disable no-unused-vars */
export enum TransactionStatus {
  SYNCING = 'syncing',
  FAILED = 'failed'
}

export enum ExchangeLinkingStatus {
  LINKING_YOUR_ACCOUNT = 'Linking your account.....',
  LINK_FAILED_WRONG_API = 'Wrong credentials. Account is not linked'
}

export enum TransactionLinkingStatus {
  SYNCING_TRANSACTIONS = 'Syncing your transactions.......',
  PROCESSING_FILE = 'Processing.......',
  FILE_PROCESSING_FAILED = 'Failed to process the file',
  TRANSACTION_SYNC_FAILED = 'Transactions-sync failed.'
}

export enum SyncRequestStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  FAILED = 'failed',
  COMPLETED = 'completed',
  RE_SYNC_FAILED = 'reSyncFailed',
  LINKING = 'linking',
  LINK_FAILED = 'linkFailed',
  DEAD = 'dead',
  UNLINKED = 'unlinked',
  AUTH_EXPIRED = 'authExpiry'
}

export enum FileProcessStatus {
  FILE_PROCESSING = 'processing',
  FILE_PROCESSING_FAILED = 'failed',
  UPLOAD_COMPLETED = 'completed',
  READY_TO_PROCESS = 'ready_to_process'
}

export enum TEMPLATE {
  GENERIC = 'generic'
}
export enum LINKED_DATA_SOURCE {
  FETCHED_FROM_API = 'fromApi',
  FETCHED_FILE = 'fromFile'
}

export enum FETCHED_FROM {
  fromApi = 'Fetched via api',
  fromFile = 'File Uploaded'
}
