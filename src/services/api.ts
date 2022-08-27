import { ClientError, GraphQLClient } from 'graphql-request';
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs
} from '@reduxjs/toolkit/dist/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { showNotifier } from '@reducers/appReducer';
import { ERROR_CODE_MAPPER } from '@constants/errorCodeMapper';
import { NotifierTypes, TOKEN_EXPIRED_ERROR } from '@constants/common';
import { translate } from '@utils/locale';
import { ExtraOptions, GraphQLArgs } from './type';
import store from '@store/store';

/* REST API*/
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_ENDPOINT}/${process.env.REACT_APP_API_VERSION}/`,
  credentials: 'include'
});

const customFetchBaseQuery: BaseQueryFn<
  string | FetchArgs, // Args
  unknown, // Result
  unknown, // Error
  ExtraOptions, // DefinitionExtraOptions
  object // Meta
> = async (arg, api, extraOptions) => {
  try {
    const result = await baseQuery(arg, api, extraOptions);
    if (result?.error && extraOptions?.showNotifier && extraOptions?.failure) {
      let notifierMessage = extraOptions.failure;
      const error: any = result.error;
      if (!extraOptions?.showCustomMessage && error?.data?.error) {
        const errorObj = error?.data?.error;
        // check for the message in the ERROR_CODE_MAPPER object
        if (errorObj.code && ERROR_CODE_MAPPER[errorObj.code]) {
          notifierMessage = ERROR_CODE_MAPPER[errorObj.code];
        } else if (errorObj.details?.length > 0) {
          // shows the default BE message if corresponding message for code is not available
          notifierMessage = errorObj.details?.join(',');
        }
      }
      store.dispatch(
        showNotifier({
          message: notifierMessage,
          type: extraOptions?.failureNotifierType || NotifierTypes.ERROR
        })
      );
    } else if (
      result &&
      !result.error &&
      extraOptions?.showNotifier &&
      extraOptions?.success
    ) {
      store.dispatch(
        showNotifier({
          message: extraOptions.success,
          type: extraOptions?.successNotifierType || NotifierTypes.SUCCESS
        })
      );
    }
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    store.dispatch(
      showNotifier({
        message: translate('notifierMessage.somethingWentWrong'),
        type: NotifierTypes.ERROR
      })
    );
    return error;
  }
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: [
    'GetLinkedExchange',
    'GetSyncStatus',
    'GetTransactionList',
    'GetTransactionDetails',
    'GetFileStatus',
    'GetTaxSettings'
  ],
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});

/* GQL API*/
export const client = new GraphQLClient(
  `${process.env.REACT_APP_AUTH_API_ENDPOINT}/graphql`,
  {
    credentials: 'include',
    mode: 'cors'
  }
);

const gqlBaseQuery = graphqlRequestBaseQuery({ client });

const customFetchGQLBaseQuery: BaseQueryFn<
  GraphQLArgs, // Args
  unknown, // Result
  unknown, // Error
  ExtraOptions & Partial<Pick<ClientError, 'request' | 'response'>>, // DefinitionExtraOptions
  object // Meta
> = async (arg, api, extraOptions) => {
  try {
    const result = await gqlBaseQuery(arg, api, extraOptions);
    if (result?.error && extraOptions?.showNotifier && extraOptions?.failure) {
      if (extraOptions.showCustomMessage === false) {
        const errors = result?.error;
        if (
          !(
            errors?.message
              .toString()
              .includes(TOKEN_EXPIRED_ERROR.invalidLink) ||
            errors?.message
              .toString()
              .includes(TOKEN_EXPIRED_ERROR.invalidToken) ||
            errors?.message
              .toString()
              .includes(TOKEN_EXPIRED_ERROR.malformedToken)
          ) //This scenario already handled with seperate page
        )
          store.dispatch(
            showNotifier({
              message:
                extraOptions.failure,
              type: extraOptions?.failureNotifierType || NotifierTypes.ERROR
            })
          );
      } else
        store.dispatch(
          showNotifier({
            message: extraOptions.failure,
            type: extraOptions?.failureNotifierType || NotifierTypes.ERROR
          })
        );
    } else if (extraOptions?.showNotifier && extraOptions?.success) {
      store.dispatch(
        showNotifier({
          message: extraOptions.success,
          type: extraOptions?.successNotifierType || NotifierTypes.SUCCESS
        })
      );
    }
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    store.dispatch(
      showNotifier({
        message: translate('notifierMessage.somethingWentWrong'),
        type: NotifierTypes.ERROR
      })
    );
    return error;
  }
};

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['GetUserDetails'],
  baseQuery: customFetchGQLBaseQuery,
  endpoints: () => ({})
});

export default baseApi;
