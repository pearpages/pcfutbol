import * as fake from "faker";

import type { Player, Position, QualityRange } from "./models";
import { generateRandom } from "./utils";

function getQualityRangeValues(qualityRange: QualityRange): {
  quality: number;
  salaryInThousandEur: number;
  marketValueInThousandEur: number;
} {
  if (qualityRange === 1) {
    return {
      quality: generateRandom(9, 10),
      salaryInThousandEur: generateRandom(1),
      marketValueInThousandEur: generateRandom(10),
    };
  }
  if (qualityRange === 2) {
    return {
      quality: generateRandom(9, 20),
      salaryInThousandEur: generateRandom(2, 1),
      marketValueInThousandEur: generateRandom(90, 10),
    };
  }
  if (qualityRange === 3) {
    return {
      quality: generateRandom(9, 30),
      salaryInThousandEur: generateRandom(7, 3),
      marketValueInThousandEur: generateRandom(200, 100),
    };
  }
  if (qualityRange === 4) {
    return {
      quality: generateRandom(9, 40),
      salaryInThousandEur: generateRandom(30, 10),
      marketValueInThousandEur: generateRandom(500, 100),
    };
  }
  if (qualityRange === 5) {
    return {
      quality: generateRandom(9, 50),
      salaryInThousandEur: generateRandom(60, 40),
      marketValueInThousandEur: generateRandom(300, 600),
    };
  }
  if (qualityRange === 6) {
    return {
      quality: generateRandom(9, 60),
      salaryInThousandEur: generateRandom(100, 100),
      marketValueInThousandEur: generateRandom(600, 900),
    };
  }
  if (qualityRange === 7) {
    return {
      quality: generateRandom(9, 70),
      salaryInThousandEur: generateRandom(300, 200),
      marketValueInThousandEur: generateRandom(3500, 1500),
    };
  }
  if (qualityRange === 8) {
    return {
      quality: generateRandom(9, 80),
      salaryInThousandEur: generateRandom(10000, 500),
      marketValueInThousandEur: generateRandom(100000, 5000),
    };
  }
  if (qualityRange === 9) {
    return {
      quality: generateRandom(7, 90),
      salaryInThousandEur: generateRandom(35000, 10500),
      marketValueInThousandEur: generateRandom(345000, 105000),
    };
  }
  throw new Error('Wrong range');
}

function createPlayer({
  position,
  currentYear,
  qualityRange,
}: {
  position: Position;
  qualityRange: QualityRange;
  currentYear: number;
}): Player {
  const MALE = 0;
  return {
    position,
    name: `${fake.name.firstName(MALE)} ${fake.name.lastName()}`,
    age: 15 + Math.floor(Math.random() * 12),
    yearContractEnd: currentYear + Math.ceil(Math.random() * 5),
    ...getQualityRangeValues(qualityRange),
  };
}

export default createPlayer;
