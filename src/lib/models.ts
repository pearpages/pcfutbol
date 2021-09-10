import type { TeamName } from "./createTeams";

type MatchData = [TeamName, TeamName];

type JornadaData = MatchData[];

type Position = 1 | 2 | 3 | 4;
interface PlayerData {
  id: string;
  position: Position;
  name: string;
  quality: number;
  age: number;
  yearContractEnd: number;
  salaryInThousandEur: number;
  marketValueInThousandEur: number;
}

type PlayerQualityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type {
  MatchData,
  JornadaData,
  Position,
  PlayerData,
  PlayerQualityRange,
};
