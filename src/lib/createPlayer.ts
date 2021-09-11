import { name as fakeName } from "faker";
import { v4 as uuidv4 } from "uuid";
import { AvatarGenerator } from "random-avatar-generator";

import type { PlayerData, Position, PlayerQualityRange } from "./models";
import { generateRandomNumber, makeRandomValue } from "./utils";

const generator = new AvatarGenerator();

type QualityValues = {
  quality: number;
  salaryInThousandEur: number;
  marketValueInThousandEur: number;
};

function getQualityRangeValues(
  qualityRange: PlayerQualityRange
): QualityValues {
  if (qualityRange === 1) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 10 }),
      salaryInThousandEur: generateRandomNumber(makeRandomValue(1)),
      marketValueInThousandEur: generateRandomNumber(makeRandomValue(10)),
    };
  }
  if (qualityRange === 2) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 20 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 92,
        minValue: 1,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 990,
        minValue: 10,
      }),
    };
  }
  if (qualityRange === 3) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 30 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 97,
        minValue: 3,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9200,
        minValue: 100,
      }),
    };
  }
  if (qualityRange === 4) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 40 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 930,
        minValue: 10,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9500,
        minValue: 100,
      }),
    };
  }
  if (qualityRange === 5) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 50 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 960,
        minValue: 40,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9300,
        minValue: 600,
      }),
    };
  }
  if (qualityRange === 6) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 60 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9100,
        minValue: 100,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9600,
        minValue: 900,
      }),
    };
  }
  if (qualityRange === 7) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 70 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9300,
        minValue: 200,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 93500,
        minValue: 1500,
      }),
    };
  }
  if (qualityRange === 8) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 9, minValue: 80 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 910000,
        minValue: 500,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9100000,
        minValue: 5000,
      }),
    };
  }
  if (qualityRange === 9) {
    return {
      quality: generateRandomNumber({ maxPositiveDiff: 7, minValue: 90 }),
      salaryInThousandEur: generateRandomNumber({
        maxPositiveDiff: 935000,
        minValue: 10500,
      }),
      marketValueInThousandEur: generateRandomNumber({
        maxPositiveDiff: 9345000,
        minValue: 105000,
      }),
    };
  }
  throw new Error("Wrong range");
}

function createPlayer({
  position,
  currentYear,
  qualityRange,
}: {
  position: Position;
  qualityRange: PlayerQualityRange;
  currentYear: number;
}): PlayerData {
  const MALE = 0;
  const id = uuidv4();
  return {
    id,
    avatar: generator.generateRandomAvatar(id),
    position,
    name: `${fakeName.firstName(MALE)} ${fakeName.lastName()}`,
    age: 15 + Math.floor(Math.random() * 22),
    yearContractEnd: currentYear + Math.ceil(Math.random() * 5),
    ...getQualityRangeValues(qualityRange),
  };
}

function playerSummary(player: PlayerData): string {
  return `${player.name} ${player.quality} ${player.age}`;
}

export { createPlayer, getQualityRangeValues, playerSummary };
