import {
  configureStore,
  Middleware
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

import baseApi, { authApi } from '@services/api';
import rootReducer from './reducers';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  return next(action);
};

const middlewareGroup = [
  baseApi.middleware,
  authApi.middleware,
  rtkQueryErrorLogger
];

if (process.env.REACT_APP_DEVELOPMENT_ENV === 'dev') {
  middlewareGroup.push(createLogger({ collapsed: true, diff: true }));
}

export const store = configureStore({
  reducer: {
    rootReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewareGroup)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
