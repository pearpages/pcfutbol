export type Position = 1 | 2 | 3 | 4;

export interface Player {
  id: string;
  position: Position;
  name: string;
  quality: number;
  age: number;
  yearContractEnd: number;
  salaryInThousandEur: number;
  marketValueInThousandEur: number;
}

export type RandomValue = {
  maxPositiveDiff: number;
  minValue: number;
}

export type PlayerQualityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TeamQuality = 'MEDIOCRE' | 'POOR' | 'OKAY' | 'AVERAGE' | 'GOOD' | 'TOP';

export interface Squad {
  name: string;
  players: Player[];
}

export type TeamName =
  | "Real Madrid"
  | "Sevilla"
  | "Valencia"
  | "Barcelona"
  | "Atlético"
  | "Mallorca"
  | "R. Sociedad"
  | "Osasuna"
  | "Athletic"
  | "Rayo"
  | "Villarreal"
  | "Cádiz"
  | "Levante"
  | "Betis"
  | "Elche"
  | "Espanyol"
  | "Granada"
  | "Celta"
  | "Getafe"
  | "Alavés";
