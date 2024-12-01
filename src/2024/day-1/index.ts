import { parseTwoLists } from '../../utils/parse-input';

const lists = parseTwoLists();
const left = lists.left.sort((a, b) => a - b);
const right = lists.right.sort((a, b) => a - b);

export const calculateTotalDistance = (left: number[], right: number[]) => {
  let totalDistance = 0;

  for (let i = 0; i < left.length; i++) {
    const difference = Math.abs(left[i] - right[i]);
    totalDistance += difference;
  }

  return totalDistance;
};

export const calculateSimilarityScore = (left: number[], right: number[]) => {
  let totalSimilarityScore = 0;
  const numbersTally: { [index: number]: number } = {};

  for (let i = 0; i < left.length; i++) {
    numbersTally[left[i]] = 0;
  }

  for (let j = 0; j < right.length; j++) {
    if (numbersTally.hasOwnProperty(right[j])) {
      numbersTally[right[j]] += 1;
    }
  }

  Object.entries(numbersTally).forEach((number) => {
    const [value, occurrences] = number;
    totalSimilarityScore += +value * occurrences;
  });

  return totalSimilarityScore;
};
