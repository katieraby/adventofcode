import { calculateSafeReports } from '.';

const testDataExample = [
  '7 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
  '9 8 7 7 7',
];

const testDataExample2 = [
  '100 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
];

const listOfSafes = [
  '48 46 47 49 51 54 56',
  '1 1 2 3 4 5',
  '1 2 3 4 5 5',
  '5 1 2 3 4 5',
  '1 4 3 2 1',
  '1 6 7 8 9',
  '1 2 3 4 3',
  '9 8 7 6 7',
  '7 10 8 10 11',
  '29 28 27 25 26 25 22 20',
  '7 10 8 10 11',
  '29 28 27 25 26 25 22 20',
];

describe('calculateSafeReports - part two modification', () => {
  it('given an array of reports, calculates the number of safe reports', () => {
    expect(calculateSafeReports(testDataExample)).toBe(4);
  });

  it('given an array of reports starting with one large number - the problem, calculates the number of safe reports', () => {
    expect(calculateSafeReports(testDataExample2)).toBe(4);
  });

  it('given an array of safe reports, correctly identifies them as safe', () => {
    expect(calculateSafeReports(listOfSafes)).toBe(12);
  });
});
