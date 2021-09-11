import React from "react";
import { Eleven } from ".";
import { PlayerData } from "../../lib/models";

import players from "./players.mock.json";

export default function FormationTable() {
  return <Eleven players={players as PlayerData[]} />;
}
