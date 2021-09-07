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

export type PlayerQualityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
