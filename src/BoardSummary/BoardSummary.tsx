import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TeamName } from "../lib/createTeams";
import { Badge } from "../Badge";

type BoardPosition = {
  position: number;
  team: TeamName;
  totalGames: number;
  totalPoints: number;
};

function BoardSummary({ boardPositions }: { boardPositions: BoardPosition[] }) {
  return (
    <div style={{ width: "320px" }}>
      <TableContainer component={Paper}>
        <Table size={"small"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Pos</TableCell>
              <TableCell align="left">Team</TableCell>
              <TableCell align="right">PG</TableCell>
              <TableCell align="right">Pts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boardPositions.map((position) => (
              <TableRow key={position.position}>
                <TableCell align="right">{position.position}</TableCell>
                <TableCell align="left">
                  <Badge teamName={position.team} /> {position.team}
                </TableCell>
                <TableCell align="right">{position.totalGames}</TableCell>
                <TableCell align="right">{position.totalPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export { BoardSummary };
export type { BoardPosition };
