import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import type { PlayerData } from "../../lib/models";
import { Player } from "../../lib/Player";

export function Eleven({ players }: { players: PlayerData[] }) {
  return (
    <div style={{ width: "380px", margin: "5px" }}>
      <TableContainer component={Paper}>
        <Table size={"small"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Quality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell align="right">
                  {Player.of(player).getPositionString()}
                </TableCell>
                <TableCell align="right">{player.name}</TableCell>
                <TableCell align="right">{player.quality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
