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

type TeamQuality = "MEDIOCRE" | "POOR" | "OKAY" | "AVERAGE" | "GOOD" | "TOP";

const tactics = [
  "5-3-2",
  "5-4-1",
  "4-4-2",
  "4-5-1",
  "4-2-4",
  "4-3-3",
  "3-3-4",
  "3-4-3",
  "3-5-2",
] as const;
type Tactic = typeof tactics[number];

type TeamData = {
  name: TeamName;
  quality: TeamQuality;
  players: PlayerData[];
  games: number;
  points: number;
  lastResult: "WON" | "LOST" | "DRAW" | "BETWEEN_SEASONS";
  tactic: Tactic;
};

export type {
  TeamData,
  MatchData,
  JornadaData,
  Position,
  PlayerData,
  PlayerQualityRange,
  TeamQuality,
  Tactic,
};
