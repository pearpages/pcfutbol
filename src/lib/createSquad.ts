import type { Squad, TeamName, QualityRange, Player, Position } from "./models";
import { generateRandom } from "./utils";
import createPlayer from "./createPlayer";

export const teamNames: TeamName[] = [
  "Real Madrid",
  "Sevilla",
  "Valencia",
  "Barcelona",
  "Atlético",
  "Mallorca",
  "R. Sociedad",
  "Osasuna",
  "Athletic",
  "Rayo",
  "Villarreal",
  "Cádiz",
  "Levante",
  "Betis",
  "Elche",
  "Espanyol",
  "Granada",
  "Celta",
  "Getafe",
  "Alavés",
];

function generatePlayersByPosition(
  position: Position,
  qualityRange: QualityRange,
  minQuantity: number,
  maxDiff = 1
): Player[] {
  const players: Player[] = [];
  return players;
}

function generateRandomPlayers(qualityRange: QualityRange): Player[] {
  return [
    ...generatePlayersByPosition("Goalkeeper", qualityRange, 2),
    ...generatePlayersByPosition("Defender", qualityRange, 6, 2),
    ...generatePlayersByPosition("Midfielder", qualityRange, 6, 2),
    ...generatePlayersByPosition("Forward", qualityRange, 4, 2),
  ];
}

export default function createSquad(
  name: TeamName,
  qualityRange: QualityRange
): Squad {
  return { name, players: generateRandomPlayers(qualityRange) };
}
