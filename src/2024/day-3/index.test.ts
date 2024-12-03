import { getResultsOfMultiplications } from '.';

const testExample =
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

describe('getResultsOfMultiplications', () => {
  it('When given a corrupted line, finds the multiplications, and returns the result', () => {
    expect(getResultsOfMultiplications(testExample)).toBe(161);
  });
});
