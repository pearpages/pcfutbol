import { getResult } from "./getResult";
import type { Formation } from "./getResult";

const local: Formation = {
  goalie: 64,
  defenders: [62, 65, 63],
  midfielders: [63, 62, 68, 65],
  attackers: [65, 62, 78],
};

const away: Formation = {
  goalie: 92,
  defenders: [92, 95, 93, 96],
  midfielders: [82, 75, 82, 61],
  attackers: [78, 62],
};

describe("getResult", () => {
  test.todo("do test");
});
