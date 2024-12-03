import fs from 'node:fs';
import path from 'path';

const input = fs.readFileSync(path.resolve(__dirname, `./input.txt`), 'utf8');

export const getResultsOfMultiplications = (str: string): number => {
  let totalOfMultiplications = 0;

  const doOrDontPattern = /(do\(\))|(don\'t\(\))/g;
  const arraySplitByDosAndDonts = str.split(doOrDontPattern);
  let allMuls: string[] = [];
  const regexpForAllMuls = /(mul\(\d+,\d+\))/g;
  let doProceed = true;

  for (let i = 0; i < arraySplitByDosAndDonts.length; i++) {
    if (!arraySplitByDosAndDonts[i]) continue;
    if (doProceed && !arraySplitByDosAndDonts[i].includes("don't()")) {
      const match = arraySplitByDosAndDonts[i].match(regexpForAllMuls);
      if (!match) continue;
      allMuls = [...allMuls, ...match];
    }

    if (arraySplitByDosAndDonts[i].includes("don't()")) {
      doProceed = false;
    }

    if (arraySplitByDosAndDonts[i].includes('do()')) {
      doProceed = true;
    }
  }

  const mulDigitsPattern = /\((\d+),(\d+)\)/;
  for (let i = 0; i < allMuls.length; i++) {
    const match = allMuls[i].match(mulDigitsPattern);
    if (!match) break;
    const result = +match[1] * +match[2];
    totalOfMultiplications += result;
  }

  return totalOfMultiplications;
};
