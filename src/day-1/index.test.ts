import {
  calculateCalibrationValue,
  calculateSingleCalibrationValue,
  sumCalibrationValues,
} from "./index";

import { parseInput } from "../utils/parse-input";

describe("calculateCalibrationValues", () => {
  it("Given an array with a string of no numbers, returns an empty array", () => {
    expect(calculateCalibrationValue(["inputstringnonumbers"])).toEqual(0);
  });

  it("Given an array with lots of strings with and without numbers, returns the value", () => {
    expect(
      calculateCalibrationValue([
        "1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet",
      ])
    ).toEqual(142);
  });

  it("Given the full input calibration data, return the sum of the calibration values", () => {
    const input = parseInput("day-1");
    expect(calculateCalibrationValue(input)).toEqual(53974);
  });
});

describe("calculateSingleCalibrationValue", () => {
  it("given an empty string, returns 0", () => {
    expect(calculateSingleCalibrationValue("")).toEqual(0);
  });

  it("given a string of one number, returns the number twice together", () => {
    expect(calculateSingleCalibrationValue("and1")).toEqual(11);
  });

  it("given a string of two numbers, returns the numbers together", () => {
    expect(calculateSingleCalibrationValue("and1and2")).toEqual(12);
  });

  it("given a string of three numbers, return the first number and the last number together", () => {
    expect(calculateSingleCalibrationValue("and1and2and3")).toEqual(13);
  });

  it("given a long string of lots of numbers, returns the first and last numbers together", () => {
    expect(
      calculateSingleCalibrationValue("seven7jmngpvqnkf979lkgzhbvbltztcsqhr")
    ).toEqual(79);
  });
});

describe("sumCalibrationValues", () => {
  it("Given an empty array, returns 0", () => {
    expect(sumCalibrationValues([])).toEqual(0);
  });

  it("Given an array of one number, returns that number", () => {
    expect(sumCalibrationValues([1])).toEqual(1);
  });

  it("Given an array of many number, returns the sum of those numbers", () => {
    expect(sumCalibrationValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    expect(sumCalibrationValues([55, 25, 89, 14, 22])).toEqual(205);
  });
});
