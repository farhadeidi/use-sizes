import { describe, expect, it } from '@jest/globals';
import { getAspectRatio, getGreatestCommonDivisor } from '../helpers';

describe('getGreatestCommonDivisor', () => {
  it('returns the gcd of two integers', () => {
    expect(getGreatestCommonDivisor(1080, 1920)).toBe(120);
    expect(getGreatestCommonDivisor(12, 8)).toBe(4);
    expect(getGreatestCommonDivisor(7, 13)).toBe(1);
  });

  it('handles zero without looping forever', () => {
    expect(getGreatestCommonDivisor(10, 0)).toBe(10);
    expect(getGreatestCommonDivisor(0, 10)).toBe(10);
    expect(getGreatestCommonDivisor(0, 0)).toBe(0);
  });

  it('rounds fractional inputs', () => {
    expect(getGreatestCommonDivisor(390.4, 844)).toBe(2);
  });
});

describe('getAspectRatio', () => {
  it('reduces common screen sizes', () => {
    expect(getAspectRatio(1080, 1920)).toEqual([9, 16]);
    expect(getAspectRatio(1920, 1080)).toEqual([16, 9]);
    expect(getAspectRatio(1024, 768)).toEqual([4, 3]);
  });

  it('returns the input when the ratio cannot be reduced', () => {
    expect(getAspectRatio(0, 0)).toEqual([0, 0]);
  });
});
