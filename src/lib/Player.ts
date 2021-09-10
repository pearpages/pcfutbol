import type { Player as PlayerType} from './models';

export const Player = {
  of(player: PlayerType) {
    return {
      getQuality() {
        return `${player.quality} ${player.position} ${player.name}`
      }
    }
  }
}
