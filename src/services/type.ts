import { DocumentNode } from 'graphql';

export type ExtraOptions = {
  showNotifier?: boolean;
  failure?: string;
  success?: string;
  showCustomMessage?: boolean;
  successNotifierType?: string;
  failureNotifierType?: string;
};

export type GraphQLArgs = {
  document: string | DocumentNode;
  variables?: any;
};
