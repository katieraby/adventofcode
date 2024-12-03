import fs from 'node:fs';
import path from 'path';

const input = fs.readFileSync(path.resolve(__dirname, `./input.txt`), 'utf8');

const multiply = (a: number, b: number) => a * b;

export const getResultsOfMultiplications = (str: string): number => {
  let totalOfMultiplications = 0;

  const regexpForAllMuls = /(mul\(\d+,\d+\))/g;
  const allMuls = str.match(regexpForAllMuls);
  if (!allMuls) return 0;

  const mulDigitsPattern = /\((\d+),(\d+)\)/;
  for (let i = 0; i < allMuls.length; i++) {
    const match = allMuls[i].match(mulDigitsPattern);
    if (!match) break;
    const result = multiply(+match[1], +match[2]);
    totalOfMultiplications += result;
  }

  return totalOfMultiplications;
};
