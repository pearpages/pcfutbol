import type { PlayerData } from "./models";

export const Player = {
  of(player: PlayerData) {
    return {
      getQualityDescription() {
        return `${player.quality} ${player.position} ${player.name}`;
      },
    };
  },
};
