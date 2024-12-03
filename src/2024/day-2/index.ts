import { parseInput } from '../../utils/parse-input';

const data = parseInput('2024', 'day-2');

const isReportSafe = (report: number[], attempts: number): boolean => {
  if (attempts === 0) return false;
  let incrementing = report[1] > report[0];

  const removeAttempt = (report: number[], attempts: number) => {
    for (let i = 0; i < report.length; i++) {
      let copy = [...report];
      copy.splice(i, 1);
      if (isReportSafe(copy, attempts - 1) === true) {
        return true;
      }
    }
    return false;
  };

  for (let j = 1; j < report.length; j++) {
    if (report[j] === report[j - 1]) {
      return removeAttempt(report, attempts);
    }

    let difference = report[j - 1] - report[j];
    if (!incrementing) {
      if (difference >= 1 && difference <= 3) {
        continue;
      } else {
        return removeAttempt(report, attempts);
      }
    } else {
      if (difference <= -1 && difference >= -3) {
        continue;
      } else {
        return removeAttempt(report, attempts);
      }
    }
  }

  return true;
};

export const calculateSafeReports = (data: string[]) => {
  let safeReports = 0;

  for (let i = 0; i < data.length; i++) {
    const report = data[i].split(' ').map(Number);
    let attemptsAllowed = 2;

    if (isReportSafe(report, attemptsAllowed)) {
      safeReports += 1;
    }
  }
  return safeReports;
};
