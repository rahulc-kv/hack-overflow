import { ReactElement } from 'react';

export type ErrorState = {
  hasError: boolean;
};

export interface ErrorBoundaryProps {
  children: ReactElement;
}
