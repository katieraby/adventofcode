import { parseInput } from "../utils/parse-input";

const possibleRedCubes = 12;
const possibleGreenCubes = 13;
const possibleBlueCubes = 14;

type Game = {
  red: number;
  green: number;
  blue: number;
};

const splitStringIntoGame = (gameString: string): string[] =>
  gameString.split(": ")[1].split("; ");

export const isGamePossible = (game: Game): boolean => {
  return (
    game.red <= possibleRedCubes &&
    game.green <= possibleGreenCubes &&
    game.blue <= possibleBlueCubes
  );
};

export const getGameId = (game: string): number => {
  // parseInt ignores the rest of the string after the number
  return parseInt(game.split(" ")[1]);
};

export const sumGameIds = (gameNumbers: number[]): number => {
  let sum = 0;
  for (let i = 0; i < gameNumbers.length; i++) {
    sum += gameNumbers[i];
  }
  return sum;
};

export const calculateCubeConundrum = (input: string[]): number => {
  const possibleGames: number[] = [];
  input.forEach((gameString) => {
    const gameArray = splitStringIntoGame(gameString);
    let areAllGamesPossible = true;
    gameArray.forEach((game) => {
      const gameValues: Game = {
        red: 0,
        green: 0,
        blue: 0,
      };

      const red = game.match(/([\d.]+) *red/);
      gameValues.red = red ? parseInt(red[1]) : 0;

      const blue = game.match(/([\d.]+) *blue/);
      gameValues.blue = blue ? parseInt(blue[1]) : 0;

      const green = game.match(/([\d.]+) *green/);
      gameValues.green = green ? parseInt(green[1]) : 0;

      if (!isGamePossible(gameValues)) {
        areAllGamesPossible = false;
        return;
      }
    });

    if (areAllGamesPossible) {
      possibleGames.push(getGameId(gameString));
    }
  });
  return sumGameIds(possibleGames);
};
