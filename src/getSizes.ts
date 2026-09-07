import { getAspectRatio } from './helpers';

export type SizeProps = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscapeMode: boolean;
  isPortraitMode: boolean;
  aspectRatio: [number, number];
  is: {
    xs: boolean;
    s: boolean;
    m: boolean;
    l: boolean;
    xl: boolean;
    xxl: boolean;
  };
};

export type SizeInput = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};

/**
 * Derives all size flags from raw window dimensions. Pure function, so it
 * can be used outside of React (e.g. with `Dimensions.get('window')`).
 */
export function getSizes({
  width,
  height,
  scale,
  fontScale,
}: SizeInput): SizeProps {
  return {
    width,
    height,
    scale,
    fontScale,
    isPhone: width <= 680,
    isTablet: width > 680,
    isDesktop: width > 1024,
    isPortraitMode: width < height,
    isLandscapeMode: height < width,
    aspectRatio: getAspectRatio(width, height),
    is: {
      xs: width <= 320,
      s: width <= 480,
      m: width > 480,
      l: width >= 768,
      xl: width >= 1024,
      xxl: width >= 1280,
    },
  };
}
