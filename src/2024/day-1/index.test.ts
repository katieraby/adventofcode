import { calculateSimilarityScore, calculateTotalDistance } from '.';

describe('calculateTotalDistance', () => {
  it('Given an empty array and an array with a few items, returns 0 total distance', () => {
    expect(calculateTotalDistance([], [2, 3, 5, 6])).toBe(0);
  });

  it.each([
    [[2], [1], 1],
    [[2, 4, 6], [1, 3, 5], 3],
    [[22, 60], [11, 30], 41],
  ])(
    `Given two sorted arrays, returns the difference (test #%#)`,
    (a, b, expected) => {
      expect(calculateTotalDistance(a, b)).toBe(expected);
    }
  );
});

describe('calculateSimilarityScore', () => {
  it('Given an empty array and an array with a few items, returns 0 similarity score', () => {
    expect(calculateSimilarityScore([], [2, 5, 6, 7, 8])).toBe(0);
  });

  it('Given two arrays with no numbers in common, returns 0', () => {
    expect(calculateSimilarityScore([2, 3, 4, 5], [11, 120, 340])).toBe(0);
  });

  it('Given two small arrays with 1 number in common, returns the similarity score', () => {
    expect(calculateSimilarityScore([2, 3, 4, 5], [2, 55, 66, 77, 88])).toBe(2);
  });

  it('Given one array with lots of occurrences of the same number but second array doesnt contain it, return 0', () => {
    expect(calculateSimilarityScore([2, 2, 2, 2, 2], [4, 4, 4, 4, 4])).toBe(0);
  });

  it('Given two arrays with lots of similarities, returns correct similarity score', () => {
    expect(calculateSimilarityScore([2, 4, 6], [2, 4, 6])).toBe(12);
  });

  it('Give two arrays with lots of duplicates, returns correct similarity score', () => {
    expect(
      calculateSimilarityScore([2, 4, 6], [2, 2, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6])
    ).toBe(56);
  });
});
