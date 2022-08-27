import { useState, useEffect } from 'react';

interface screenDimensions {
  screenWidth: number;
  screenHeight: number;
}

interface UseScreenDimensionsType extends screenDimensions {
  isMobileView: boolean;
}

function getScreenDimensions(): screenDimensions {
  const {
    innerWidth: innerScreenWidth,
    innerHeight: screenHeight,
    outerWidth: outerScreenWidth
  } = window ?? {};
  const screenWidth =
    outerScreenWidth && innerScreenWidth > outerScreenWidth
      ? outerScreenWidth
      : innerScreenWidth;

  return {
    screenWidth,
    screenHeight
  };
}

export default function useScreenDimensions(): UseScreenDimensionsType {
  const [screenDimensions, setScreenDimensions] = useState(
    getScreenDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setScreenDimensions(getScreenDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileView = screenDimensions?.screenWidth < 640;

  return { ...screenDimensions, isMobileView };
}
