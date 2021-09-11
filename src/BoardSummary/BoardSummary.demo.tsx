import React from "react";

import { BoardSummary, BoardPosition } from ".";

const mockedPositions: BoardPosition[] = [
  {
    position: 5,
    team: "R. Sociedad",
    totalGames: 35,
    totalPoints: 70,
  },
  {
    position: 6,
    team: "Villarreal",
    totalGames: 35,
    totalPoints: 69,
  },
  {
    position: 7,
    team: "Mallorca",
    totalGames: 35,
    totalPoints: 56,
  },
  {
    position: 8,
    team: "Granada",
    totalGames: 35,
    totalPoints: 55,
  },
  {
    position: 9,
    team: "Getafe",
    totalGames: 35,
    totalPoints: 46,
  },
];

export default function Demo() {
  return <BoardSummary boardPositions={mockedPositions} />;
}
