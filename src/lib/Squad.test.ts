import type { PlayerData } from "./models";
import { Squad } from "./Squad";
import mockedSquad from "./Squad.mock.json";
import { tactics } from "./createTeams";

const allTactics = Array.from(tactics);

const squad = Squad.of(mockedSquad as any);

// '89 1 Sheldon Mante',
// '78 1 Brett Treutel',
// '89 2 Brandon Wolff',
// '88 2 Brandon Pouros',
// '86 2 Brendan Harber',
// '63 2 Jeffrey Jerde',
// '61 2 Orlando DuBuque',
// '65 3 Willie Reichert',
// '78 3 Leroy Zboncak',
// '87 3 Jeffrey Stark',
// '81 3 Harvey Adams',
// '87 3 Ronald Schoen',
// '84 3 Roland Rolfson',
// '74 4 Ronald Frami',
// '76 4 Jamie Boyer',
// '88 4 Marlon Weimann',
// '89 4 Joel Keebler'

const getPlayerQuality = (player: PlayerData) => player.quality;

describe("<Squad>", () => {
  test("We get the best players for each tactic", () => {
    allTactics.forEach((tactic) => {
      expect(squad.pickBest11(tactic).map(getPlayerQuality).join(" ")).toEqual(
        getSquad(tactic)
      );
    });
  });
});

function getSquad(tactic: string): string {
  const all: { [key: string]: Array<Array<number>> } = {
    "5-3-2": [[89], [89, 88, 86, 63, 61], [87, 87, 84], [89, 88]],
    "5-4-1": [[89], [89, 88, 86, 63, 61], [87, 87, 84, 81], [89]],
    "4-4-2": [[89], [89, 88, 86, 63], [87, 87, 84, 81], [89, 88]],
    "4-5-1": [[89], [89, 88, 86, 63], [87, 87, 84, 81, 78], [89]],
    "4-2-4": [[89], [89, 88, 86, 63], [87, 87], [89, 88, 76, 74]],
    "4-3-3": [[89], [89, 88, 86, 63], [87, 87, 84], [89, 88, 76]],
    "3-3-4": [[89], [89, 88, 86], [87, 87, 84], [89, 88, 76, 74]],
    "3-4-3": [[89], [89, 88, 86], [87, 87, 84, 81], [89, 88, 76]],
    "3-5-2": [[89], [89, 88, 86], [87, 87, 84, 81, 78], [89, 88]],
  };

  return (all[tactic] && all[tactic].flatMap((x) => x).join(" ")) || tactic;
}
