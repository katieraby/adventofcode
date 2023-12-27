import { calculateCalibrationValues } from "./index";

describe("calculateCalibrationValues", () => {
  it("Given a string of no numbers, returns an empty array", () => {
    expect(calculateCalibrationValues("inputstringnonumbers")).toEqual([]);
  });
});
