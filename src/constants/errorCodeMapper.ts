import { translate } from '@utils/locale';

export const ERROR_CODE_MAPPER = {
  101: translate('apiErrorMapper.unableToProcessRequest'),
  103: translate('apiErrorMapper.unableToConnectExchange'),
  121: translate('apiErrorMapper.exchangeIsAlreadyLinked'),
  124: translate('apiErrorMapper.unableToConnectExchange'),
  138: translate('apiErrorMapper.unableToProcessChargeBee'),
  140: translate('apiErrorMapper.noTransactionFound'),
  141: translate('apiErrorMapper.errorsInTransaction'),
  144: translate('apiErrorMapper.fileUploadFailed'),
  145: translate('apiErrorMapper.fileUploadFailed'),
  146: translate('apiErrorMapper.incorrectFileFormat')
};
