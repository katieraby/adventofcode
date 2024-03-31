import { calculateCubeConundrum, getGameId, sumGameIds } from ".";

describe("calculateCubeConundrum", () => {
  it("given one impossible game with one combination, return 0", () => {
    expect(calculateCubeConundrum(["Game 1: 22 red, 1 green, 1 blue"])).toBe(0);
  });

  it("given one possible game, returns the game id", () => {
    expect(
      calculateCubeConundrum([
        "Game 3: 6 red, 4 green, 7 blue; 7 blue, 9 red, 3 green; 2 red, 4 green; 6 red, 2 blue; 7 blue, 9 red, 5 green",
      ])
    ).toBe(3);
  });

  it("given several possible games, returns the sum of the game ids", () => {
    const input = [
      "Game 3: 6 red, 4 green, 7 blue; 7 blue, 9 red, 3 green; 2 red, 4 green; 6 red, 2 blue; 7 blue, 9 red, 5 green",
      "Game 12: 6 green, 2 red; 2 green; 11 red, 6 green, 1 blue",
      "Game 21: 3 red, 1 green, 1 blue; 3 red, 7 blue, 1 green; 1 green, 4 red, 7 blue; 1 green; 6 blue, 3 red; 2 red, 6 blue",
    ];
    expect(calculateCubeConundrum(input)).toBe(36);
  });

  it("given several possible games and one impossible game, returns the sum of the game ids", () => {
    const input = [
      "Game 3: 6 red, 4 green, 7 blue; 7 blue, 9 red, 3 green; 2 red, 4 green; 6 red, 2 blue; 7 blue, 9 red, 5 green",
      "Game 12: 6 green, 2 red; 2 green; 11 red, 6 green, 1 blue",
      "Game 21: 3 red, 1 green, 1 blue; 3 red, 7 blue, 1 green; 1 green, 4 red, 7 blue; 1 green; 6 blue, 3 red; 2 red, 6 blue",
      "Game 14: 7 red, 15 green, 17 blue; 10 green, 6 red, 12 blue; 3 blue, 7 red, 3 green",
    ];
    expect(calculateCubeConundrum(input)).toBe(36);
  });
});

describe("sumGameIds", () => {
  it("when given an array with one number returns the number", () => {
    expect(sumGameIds([1])).toBe(1);
  });

  it("when given an array of several game ids, returns the sum of the numbers", () => {
    expect(sumGameIds([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe("getGameId", () => {
  it("should return the id of a game when given a game string", () => {
    expect(getGameId("Game 1: 22 red, 1 green, 1 blue")).toBe(1);
    expect(getGameId("Game 12: 22 red, 1 green, 1 blue")).toBe(12);
  });
});
