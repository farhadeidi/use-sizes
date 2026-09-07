import { describe, expect, it } from '@jest/globals';
import { getSizes } from '../getSizes';

describe('getSizes', () => {
  it('classifies a portrait phone', () => {
    const sizes = getSizes({ width: 390, height: 844, scale: 3, fontScale: 1 });

    expect(sizes).toMatchObject({
      width: 390,
      height: 844,
      scale: 3,
      fontScale: 1,
      isPhone: true,
      isTablet: false,
      isDesktop: false,
      isPortraitMode: true,
      isLandscapeMode: false,
      aspectRatio: [195, 422],
      is: { xs: false, s: true, m: false, l: false, xl: false, xxl: false },
    });
  });

  it('classifies a landscape tablet', () => {
    const sizes = getSizes({
      width: 1024,
      height: 768,
      scale: 2,
      fontScale: 1,
    });

    expect(sizes).toMatchObject({
      isPhone: false,
      isTablet: true,
      isDesktop: false,
      isPortraitMode: false,
      isLandscapeMode: true,
      aspectRatio: [4, 3],
      is: { xs: false, s: false, m: true, l: true, xl: true, xxl: false },
    });
  });

  it('classifies a desktop viewport', () => {
    const sizes = getSizes({
      width: 1440,
      height: 900,
      scale: 1,
      fontScale: 1,
    });

    expect(sizes.isDesktop).toBe(true);
    expect(sizes.isTablet).toBe(true);
    expect(sizes.is.xxl).toBe(true);
  });

  it('treats a square viewport as neither portrait nor landscape', () => {
    const sizes = getSizes({ width: 500, height: 500, scale: 1, fontScale: 1 });

    expect(sizes.isPortraitMode).toBe(false);
    expect(sizes.isLandscapeMode).toBe(false);
    expect(sizes.aspectRatio).toEqual([1, 1]);
  });
});
