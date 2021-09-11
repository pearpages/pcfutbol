import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TeamName } from "../lib/createTeams";
import { Badge } from "../Badge";

type Result = {
  jornada: number;
  rival: TeamName;
  stadium: "HOME" | "AWAY";
  score: [number, number];
};

function CalendarSummary({ results }: { results: Result[] }) {
  return (
    <div style={{ width: "270px" }}>
      <TableContainer component={Paper}>
        <Table size={"small"} aria-label="simple table">
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.jornada}>
                <TableCell align="right">{result.jornada}</TableCell>
                <TableCell align="left">
                  <Badge teamName={result.rival} /> {result.rival}
                </TableCell>
                <TableCell align="right">
                  {result.stadium.slice(0, 1)}
                </TableCell>
                <TableCell align="right">{result.score.join("-")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export { CalendarSummary };
export type { Result };
