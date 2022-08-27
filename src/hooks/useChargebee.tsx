import { useEffect, useState } from 'react';

export default function useChargeBee() {
  const [cbInstance, setCbInstance] = useState<any>(null);

  useEffect(() => {
    try {
      // getInstance will throw error if the instance is not already initialized
      const instance = (window as any).Chargebee?.getInstance();
      setCbInstance(instance);
    } catch (error) {
      const instance = (window as any).Chargebee.init({
        site: process.env.REACT_APP_CHARGEBEE,
        publishableKey: process.env.REACT_APP_CHARGEBEE_KEY
      });
      setCbInstance(instance);
    }
  }, []);

  return cbInstance;
}
