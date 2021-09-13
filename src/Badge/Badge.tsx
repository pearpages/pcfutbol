import React from "react";
import { TeamName } from "../lib/createTeams";
import madrid from "./icons/madrid.png";
import rayo from "./icons/rayo.png";
import barca from "./icons/barca.png";
import alaves from "./icons/alaves.png";
import athletic from "./icons/athletic.png";
import celta from "./icons/celta.png";
import espanyol from "./icons/espanyol.png";
import sevilla from "./icons/sevilla.png";
import valencia from "./icons/valencia.png";
import atletico from "./icons/atletico.png";
import mallorca from "./icons/mallorca.png";
import sociedad from "./icons/sociedad.png";
import osasuna from "./icons/osasuna.png";
import villareal from "./icons/villareal.png";
import cadiz from "./icons/cadiz.png";
import levante from "./icons/levante.png";
import betis from "./icons/betis.png";
import elche from "./icons/elche.png";
import granada from "./icons/granada.png";
import getafe from "./icons/getafe.png";

function badgeMapper(teamName: TeamName): string {
  const badges = {
    "Real Madrid": madrid,
    Sevilla: sevilla,
    Valencia: valencia,
    Barcelona: barca,
    Atlético: atletico,
    Mallorca: mallorca,
    "R. Sociedad": sociedad,
    Osasuna: osasuna,
    Athletic: athletic,
    Rayo: rayo,
    Villarreal: villareal,
    Cádiz: cadiz,
    Levante: levante,
    Betis: betis,
    Elche: elche,
    Espanyol: espanyol,
    Granada: granada,
    Celta: celta,
    Getafe: getafe,
    Alavés: alaves,
  };

  return badges[teamName];
}

function Badge({ teamName }: { teamName: TeamName }) {
  return (
    <img
      width="15px"
      src={badgeMapper(teamName)}
      alt={teamName}
      title={teamName}
      style={{ position: "relative", top: "2px" }}
    />
  );
}

export { Badge };
