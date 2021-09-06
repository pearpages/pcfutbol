export type Position = 'Goalkeeper' | 'Defender' |'Midfielder' | 'Forward';

export interface Player {
  position: Position;
  name: string;
  quality: number;
  age: number;
  yearContractEnd: number;
  salaryInThousandEur: number;
  marketValueInThousandEur: number;
}

export type QualityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;