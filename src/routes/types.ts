import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';

export type ClearPageReducerFunctionType = {
  paths: string[];
  reducerFunction: ActionCreatorWithOptionalPayload<boolean, string>;
};
