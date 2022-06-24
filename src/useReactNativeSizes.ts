import { useWindowDimensions, Dimensions, ScaledSize } from 'react-native';
import { SizeProps, SizesContext } from './SizesContext';
import { useContext, useEffect } from 'react';
import { getAspectRatio } from './helpers';

export const getSizes = (
  initialSizes: ScaledSize = Dimensions.get('screen')
): SizeProps => {
  const { width, height, scale, fontScale } = initialSizes;
  const aspectRatio = getAspectRatio(width, height);

  return {
    width: width,
    height: height,
    scale: scale,
    fontScale: fontScale,
    isPhone: width <= 680,
    isTablet: width > 680,
    isDesktop: width > 1024,
    isPortraitMode: width < height,
    isLandscapeMode: height < width,
    aspectRatio: aspectRatio,
    is: {
      xs: width <= 320,
      s: width <= 480,
      m: width > 480,
      l: width >= 768,
      xl: width >= 1024,
      xxl: width >= 1280,
    },
  };
};

const useReactNativeSizes = () => {
  const context = useContext(SizesContext);
  if (context === undefined) {
    throw new Error('useSizesContext must be used within a SizesProvider');
  }

  const dimensions = useWindowDimensions();

  useEffect(() => {
    context.setState(getSizes(dimensions));
  }, [dimensions]);
  console.log(getSizes({ ...dimensions, width: 540, height: 960 }));

  return context.state || getSizes();
};

export default useReactNativeSizes;
