import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useGAInitialize = () => {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID
      }
    ]);
  }, []);
};
