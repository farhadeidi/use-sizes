import { beforeEach, describe, expect, it } from '@jest/globals';
import { act, renderHook } from '@testing-library/react-native';
import type { ReactNode } from 'react';
import { Dimensions } from 'react-native';
import { SizesProvider, useReactNativeSizes } from '../index';

const portraitPhone = { width: 390, height: 844, scale: 3, fontScale: 1 };
const landscapePhone = { width: 844, height: 390, scale: 3, fontScale: 1 };

const wrapper = ({ children }: { children: ReactNode }) => (
  <SizesProvider>{children}</SizesProvider>
);

describe('useReactNativeSizes', () => {
  beforeEach(() => {
    Dimensions.set({ window: portraitPhone, screen: portraitPhone });
  });

  it('returns sizes derived from the window dimensions', async () => {
    const { result } = await renderHook(() => useReactNativeSizes(), {
      wrapper,
    });

    expect(result.current).toMatchObject({
      width: 390,
      height: 844,
      scale: 3,
      fontScale: 1,
      isPhone: true,
      isPortraitMode: true,
    });
  });

  it('updates when the window dimensions change', async () => {
    const { result } = await renderHook(() => useReactNativeSizes(), {
      wrapper,
    });

    await act(async () => {
      Dimensions.set({ window: landscapePhone, screen: landscapePhone });
    });

    expect(result.current).toMatchObject({
      width: 844,
      height: 390,
      isLandscapeMode: true,
      isTablet: true,
    });
  });

  it('keeps the same object between renders when dimensions are unchanged', async () => {
    const { result, rerender } = await renderHook(() => useReactNativeSizes(), {
      wrapper,
    });
    const first = result.current;

    await rerender(undefined);

    expect(result.current).toBe(first);
  });

  it('throws when used outside of SizesProvider', async () => {
    await expect(renderHook(() => useReactNativeSizes())).rejects.toThrow(
      'useReactNativeSizes must be used within a <SizesProvider>'
    );
  });
});
