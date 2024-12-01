import path from 'path';
import fs from 'node:fs';

export const parseInput = (year: string, dayRef: string): string[] | [] => {
  try {
    const data = fs.readFileSync(
      path.resolve(__dirname, `../${year}/${dayRef}/input.txt`),
      'utf8'
    );
    if (!data) return [];
    return data.split('\n');
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const parseTwoLists = () => {
  const data = fs.readFileSync(
    path.resolve(__dirname, `../2024/day-1/input.txt`),
    'utf8'
  );

  const dataArr = data.split(/\s+/).map((item) => Number(item));

  return {
    left: dataArr.filter((_, i) => i % 2 === 0),
    right: dataArr.filter((_, i) => i % 2 !== 0),
  };
};
