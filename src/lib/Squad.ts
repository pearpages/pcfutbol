import { Player } from './models';

const Squad: {
  players: Player[],
  of: (players: Player[]) => typeof Squad,
  calculateSquadAverage: () => number
} = {
  players: [] as Player[],
  of(players: Player[]): typeof Squad {
    this.players = players;
    return this;
  },
  calculateSquadAverage(): number {
    const totalQuality = this.players.reduce(
      (total, player) => total + player.quality,
      0
    );
    return totalQuality / this.players.length;
  }
}

export { Squad };
