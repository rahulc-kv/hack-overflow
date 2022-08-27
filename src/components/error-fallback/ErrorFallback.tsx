import React, { Component, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components';
import { ErrorFallbackIcon } from '@assets/icons';
import { ErrorBoundaryProps, ErrorState } from './types';
import routesPath from '@routes/RoutesPath';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div>
            <ErrorFallbackIcon className="m-auto w-full" />
          </div>
          <div className="mt-4 text-sm font-semibold text-center sm:text-2xl md:w-15">
            Some thing went wrong
          </div>
          <Link to={routesPath.home}>
            <Button
              className={'py-2 px-3 mt-7 bg-primaryColor'}
              label="Go home"
              labelClass={'text-white text-xs sm:text-sm'}
              onClick={() => this.setState({ hasError: false })}
            />
          </Link>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
