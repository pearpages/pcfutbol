import { Matches } from "./Matches";
import { MatchData } from "./models";

const matches = Matches.of();

describe("Matches", () => {
  describe("getSpecificTeamMatches", () => {
    test("gets the matches from the first jornada", () => {
      const res = matches.getSpecificTeamMatches({
        teamName: "Barcelona",
        jornada: 0,
        numberOfMatches: 5,
      });
      expect(res.map((x: MatchData) => x.teams)).toEqual([
        ["Barcelona", "Granada"],
        ["Barcelona", "Elche"],
        ["Barcelona", "Levante"],
        ["Barcelona", "Villarreal"],
        ["Barcelona", "Athletic"],
      ]);
    });
    test("gets the matches when there are still plenty", () => {
      const res = matches.getSpecificTeamMatches({
        teamName: "Barcelona",
        jornada: 33,
        numberOfMatches: 5,
      });
      expect(res.map((x: MatchData) => x.teams)).toEqual([
        ["Osasuna", "Barcelona"],
        ["Mallorca", "Barcelona"],
        ["Barcelona", "Real Madrid"],
        ["Barcelona", "Sevilla"],
        ["Barcelona", "Getafe"],
      ]);
    });
    test("when there are no enough matches takes previous matches until it fits the number of matches asked", () => {
      const res = matches.getSpecificTeamMatches({
        teamName: "Barcelona",
        jornada: 34,
        numberOfMatches: 5,
      });
      expect(res.map((x: MatchData) => x.teams)).toEqual([
        ["Osasuna", "Barcelona"],
        ["Mallorca", "Barcelona"],
        ["Barcelona", "Real Madrid"],
        ["Barcelona", "Sevilla"],
        ["Barcelona", "Getafe"],
      ]);
    });
  });
});
