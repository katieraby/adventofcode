export const calculateCalibrationValue = (input: string[]): number => {
  const values = input.map((string) => calculateSingleCalibrationValue(string));
  return sumCalibrationValues(values);
};

export const calculateSingleCalibrationValue = (input: string): number => {
  if (input === "") return 0;

  const inputArray = input.split("");
  const isNumber = (input: string) => /\d+/.test(input);
  let numberString = "";

  for (let i = 0; i < inputArray.length; i++) {
    if (isNumber(inputArray[i])) {
      numberString += inputArray[i];
    }
  }

  if (numberString === "") return 0;

  // combine the first digit and the last digit to form a single two-digit number
  numberString = `${numberString.charAt(0)}${numberString.charAt(
    numberString.length - 1
  )}`;

  return parseInt(numberString);
};

export const sumCalibrationValues = (values: number[]): number => {
  if (values.length === 0) return 0;

  let sum = 0;
  values.forEach((number) => {
    sum += number;
  });

  return sum;
};
