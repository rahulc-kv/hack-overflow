import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type NotifierProps = {
  id: string;
  notification: {
    message: string;
    type: string;
    id: string;
  };
  hideNotifier: ActionCreatorWithPayload<any, string>;
};
