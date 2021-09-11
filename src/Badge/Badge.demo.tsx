import React from "react";
import { Badge } from ".";
import { teamNames } from "../lib/createTeams";

export default function Demo() {
  return (
    <>
      {teamNames.map((name) => (
        <Badge key={name} teamName={name} />
      ))}
    </>
  );
}
