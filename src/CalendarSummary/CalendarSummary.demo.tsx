import React from "react";

import { CalendarSummary, Result } from ".";

const results: Result[] = [
  {
    jornada: 1,
    rival: "Betis",
    stadium: "HOME",
    score: [3, 1],
  },
  {
    jornada: 2,
    rival: "Rayo",
    stadium: "AWAY",
    score: [0, 1],
  },
  {
    jornada: 3,
    rival: "Celta",
    stadium: "HOME",
    score: [0, 1],
  },
  {
    jornada: 4,
    rival: "Espanyol",
    stadium: "AWAY",
    score: [0, 5],
  },
  {
    jornada: 5,
    rival: "Granada",
    stadium: "HOME",
    score: [6, 1],
  },
];

export default function Demo() {
  return <CalendarSummary results={results} />;
}
