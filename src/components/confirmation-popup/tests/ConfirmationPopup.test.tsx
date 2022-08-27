import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

import { translate } from '@utils/locale';
import ConfirmationPopup from '../ConfirmationPopup';

test('Confirmation PopUp Rendered', () => {
  const component = renderIntoDocument(
    <ConfirmationPopup
      title={translate('popup.areYouSure')}
      message={translate('popup.connectExchangeWarning')}
      buttonOneText={translate('cancel')}
      buttonTwoText={translate('sourcePage.importTransactions')}
      onButtonOneClick={jest.fn()}
      onButtonTwoClick={jest.fn()}
      onCloseButtonClick={jest.fn()}
      visibility={true}
    />
  );
  expect(component).toMatchSnapshot();
});
