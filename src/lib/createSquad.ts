import type {
  PlayerQualityRange,
  Player,
  Position,
} from "./models";
import type { RandomValue } from "./utils";
import { generateRandomNumber, makeRandomValue, getRandomIndex } from "./utils";
import { createPlayer, getQualityRangeValues } from "./createPlayer";

type TeamQuality = 'MEDIOCRE' | 'POOR' | 'OKAY' | 'AVERAGE' | 'GOOD' | 'TOP';

interface Squad {
  name: string;
  players: Player[];
}

type TeamName =
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

const getQualityRandomness = function (
  teamQuality: TeamQuality
): TeamRandomness {
  switch (teamQuality) {
    case "POOR":
      return {
        base: 5,
        some: [
          { quality: 4, total: generateRandomNumber(makeRandomValue(1, 2)) },
        ],
      };
    case "OKAY":
      return {
        base: 6,
        some: [
          { quality: 4, total: generateRandomNumber(makeRandomValue(1, 2)) },
          { quality: 5, total: generateRandomNumber(makeRandomValue(1, 3)) },
        ],
      };
    case "AVERAGE":
      return {
        base: 7,
        some: [
          { quality: 8, total: generateRandomNumber(makeRandomValue(1, 2)) },
          { quality: 6, total: generateRandomNumber(makeRandomValue(1, 3)) },
        ],
      };
    case "GOOD":
      return {
        base: 8,
        some: [
          { quality: 6, total: generateRandomNumber(makeRandomValue(1, 2)) },
          { quality: 7, total: generateRandomNumber(makeRandomValue(1, 3)) },
        ],
      };
    case "TOP":
      return {
        base: 8,
        some: [
          { quality: 9, total: generateRandomNumber(makeRandomValue(1, 2)) },
          { quality: 7, total: generateRandomNumber(makeRandomValue(1, 3)) },
        ],
      };
    case "MEDIOCRE":
    default:
      return {
        base: 5,
        some: [
          { quality: 3, total: generateRandomNumber(makeRandomValue(1, 2)) },
          { quality: 4, total: generateRandomNumber(makeRandomValue(1, 3)) },
        ],
      };
  }
};

function generatePlayersByPosition(
  position: Position,
  qualityRange: PlayerQualityRange,
  numberOfPlayers: RandomValue
): Player[] {
  const players: Player[] = [];
  let totalPlayers = generateRandomNumber(numberOfPlayers);
  while (totalPlayers > 1) {
    players.push(createPlayer({ position, qualityRange, currentYear: 2021 }));
    totalPlayers--;
  }
  return players;
}

type TeamRandomness = {
  base: PlayerQualityRange;
  some: Array<{ quality: PlayerQualityRange; total: number }>;
};

function generateRandomPlayers(teamQuality: TeamQuality): Player[] {
  const qualityRandomness = getQualityRandomness(teamQuality);

  const basePlayers = [
    ...generatePlayersByPosition(
      1,
      qualityRandomness.base,
      makeRandomValue(1, 2)
    ),
    ...generatePlayersByPosition(
      2,
      qualityRandomness.base,
      makeRandomValue(2, 5)
    ),
    ...generatePlayersByPosition(
      3,
      qualityRandomness.base,
      makeRandomValue(2, 5)
    ),
    ...generatePlayersByPosition(
      4,
      qualityRandomness.base,
      makeRandomValue(2, 4)
    ),
  ];

  const alreadyMutatedPlayers: number[] = [];
  qualityRandomness.some.forEach((some) => {
    while (some.total > 0) {
      const playerIndex = getRandomIndex(
        basePlayers.length,
        alreadyMutatedPlayers
      );
      alreadyMutatedPlayers.push(playerIndex);
      basePlayers[playerIndex] = {
        ...basePlayers[playerIndex],
        ...getQualityRangeValues(some.quality),
      };
      some.total--;
    }
  });

  return basePlayers;
}

function createSquad(name: TeamName, teamQuality: TeamQuality): Squad {
  return { name, players: generateRandomPlayers(teamQuality) };
}

export { createSquad};
export type {TeamName, TeamQuality, Squad };
