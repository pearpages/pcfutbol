import React from 'react'

import { Team } from '../lib/createSquads'

export function Classification({teams: originalTeams}: {teams: Team[]}) {
  const teams = originalTeams.slice().sort((a, b) => b.points - a.points);

  return (<div>
    <h4>Classification</h4>
    <table>
      <thead>
        <th>Team</th>
        <th>Games</th>
        <th>Points</th>
      </thead>
      <tbody>
        {teams.map(team => (<tr key={team.name}>
          <td>{team.name}</td>
          <td>{team.games}</td>
          <td>{team.points}</td>
        </tr>))}
      </tbody>
    </table>
  </div>)
}
