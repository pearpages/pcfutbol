import type { PlayerData, Position } from "./models";

const positionMapper = (position: Position) =>
  ({
    1: "Goalie",
    2: "Defender",
    3: "Midfielder",
    4: "Attacker",
  }[position]);

export const Player = {
  of(player: PlayerData) {
    return {
      getQualityDescription(): string {
        return `${player.quality} ${player.position} ${player.name}`;
      },
      getPositionString(): string {
        return positionMapper(player.position);
      },
    };
  },
};
