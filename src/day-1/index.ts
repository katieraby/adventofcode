export const calculateFinalCalibrationValue = (input: string[]): number => {
  const values = input.map((string) => calculateSingleCalibrationValue(string));
  return sumCalibrationValues(values);
};

const digitsSpelledOut = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

export const calculateSingleCalibrationValue = (input: string): number => {
  if (input === "") return 0;

  const inputArray = input.split("");
  const isDigit = (input: string) => /\d+/.test(input);
  let numberString = "";
  let iteratorString = "";

  for (let i = 0; i < inputArray.length; i++) {
    iteratorString += inputArray[i];

    for (let j = 0; j < digitsSpelledOut.length; j++) {
      if (iteratorString.includes(digitsSpelledOut[j])) {
        numberString += j + 1;

        // caters for edge cases where the last digit is the start of the next one
        iteratorString = iteratorString.charAt(iteratorString.length - 1);
      }
    }

    if (isDigit(inputArray[i])) {
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
