import React from "react";
import { Player } from "../../lib/models";

export function Eleven({
  description,
  players,
}: {
  description: string;
  players: Player[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>{description}</th>
        </tr>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Quality</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.position}</td>
            <td>{player.name}</td>
            <td>{player.quality}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
