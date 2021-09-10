import React from "react";

import { TeamData } from "../lib/models";

export function Classification({
  teams: originalTeams,
}: {
  teams: TeamData[];
}) {
  const teams = originalTeams.slice().sort((a, b) => b.points - a.points);

  return (
    <div style={{ display: "inline-block" }}>
      <h4>Classification</h4>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Games</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.games}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
