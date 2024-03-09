import path from "path";
import fs from "node:fs";

export const parseInput = (dayRef: string): string[] | [] => {
  try {
    const data = fs.readFileSync(
      path.resolve(__dirname, `../${dayRef}/input.txt`),
      "utf8"
    );
    if (!data) return [];
    return data.split("\n");
  } catch (err) {
    console.error(err);
    return [];
  }
};
