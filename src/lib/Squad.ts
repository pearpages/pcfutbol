import type { Player, Position } from "./models";
import type { Tactic } from "./createTeams";

function getBestPlayers(players: Player[], position: Position): Player[] {
  return players
    .filter((player) => player.position === position)
    .sort((a, b) => b.quality - a.quality);
}

const Squad: {
  of: (players: Player[]) => {
    calculateSquadAverage: () => number;
    pickBest11: (tactic: Tactic) => Player[];
    averageToFixed2: () => string;
    get: () => Player[];
  };
} = {
  of(players: Player[]) {
    return {
      get() {
        return players;
      },
      calculateSquadAverage(): number {
        const totalQuality = players.reduce(
          (total, player) => total + player.quality,
          0
        );
        return totalQuality / players.length;
      },
      averageToFixed2(): string {
        return Number(this.calculateSquadAverage()).toFixed(2);
      },
      pickBest11(tactic: Tactic): Player[] {
        const [defendersNumber, midfieldersNumber, attackersNumber] =
          tactic.split("-");

        let eleven = [...getBestPlayers(players, 1).slice(0, 1)];
        eleven = eleven.concat(
          getBestPlayers(players, 2).slice(0, Number(defendersNumber))
        );
        eleven = eleven.concat(
          getBestPlayers(players, 3).slice(0, Number(midfieldersNumber))
        );
        eleven = eleven.concat(
          getBestPlayers(players, 4).slice(0, Number(attackersNumber))
        );

        return eleven;
      },
    };
  },
};

export { Squad };
