import type { Formation, ResultData, Stats } from "./models";

type Team = "LOCAL" | "AWAY";

type Chance = {
  score: { winner: number; loser: number };
  winner: Team;
  loser: Team;
};

const hasGoalieStopped = (goalie: number) =>
  goalie * Math.random() >= 40 ? true : false;

const getTotalQuality = (quality: number[]) =>
  quality.reduce((total, value) => total + value, 0);

function calculateChance({
  local,
  away,
}: {
  local: number;
  away: number;
}): Chance {
  const localScore = local * 0.53 + 100 * Math.random();
  const awayScore = away * 0.47 + 100 * Math.random();

  return localScore - awayScore >= 0
    ? {
        score: { winner: localScore, loser: awayScore },
        winner: "LOCAL",
        loser: "AWAY",
      }
    : {
        score: { winner: awayScore, loser: localScore },
        winner: "AWAY",
        loser: "LOCAL",
      };
}

function dealWithSituation({
  messages,
  score,
  midChance,
  local,
  away,
  stats,
}: {
  midChance: Chance;
  messages: string[];
  score: [number, number];
  local: Formation;
  away: Formation;
  stats: Stats;
}): void {
  const localDefendingQuality = getTotalQuality(local.defenders);
  const localAttackQuality = getTotalQuality(local.attackers);
  const awayDefendingQuality = getTotalQuality(away.defenders);
  const awayAttackingQuality = getTotalQuality(away.attackers);

  messages.push(
    `${midChance.winner} controls midfield with ${midChance.score.winner} vs ${midChance.score.loser}`
  );
  messages.push(`${midChance.winner} gets to attacking position`);
  const attackChance =
    midChance.winner === "LOCAL"
      ? calculateChance({
          local: localAttackQuality,
          away: awayDefendingQuality,
        })
      : calculateChance({
          local: localDefendingQuality,
          away: awayAttackingQuality,
        });
  if (midChance.winner === attackChance.winner) {
    midChance.winner === "LOCAL" ? stats.attacks.local++ : stats.attacks.away++;
    messages.push(
      `Chance for ${attackChance.winner} ${attackChance.score.winner} vs ${attackChance.score.loser}`
    );
    if (
      attackChance.winner === "LOCAL"
        ? hasGoalieStopped(away.goalie)
        : hasGoalieStopped(local.goalie)
    ) {
      messages.push(`${attackChance.loser} goalie stops the attack!`);
    } else {
      messages.push(`${attackChance.winner} striker scores!`);
      attackChance.winner === "LOCAL" ? score[0]++ : score[1]++;
    }
  } else {
    messages.push(
      `${attackChance.winner} defenders stop the attack ${attackChance.score.winner} vs ${attackChance.score.loser}`
    );
  }
  messages.push("---");
}

function getResult(local: Formation, away: Formation): ResultData {
  const localsMidQuality = getTotalQuality(local.midfielders);
  const awayMidQuality = getTotalQuality(away.midfielders);
  const score: [number, number] = [0, 0];
  const messages: string[] = [];
  const stats = {
    posessionPercentage: { local: 50, away: 50 },
    attacks: { local: 0, away: 0 },
  };

  const totalChances = 20;
  const midChances: Chance[] = [...(Array(totalChances).keys() as any)].map(
    (_) => calculateChance({ local: localsMidQuality, away: awayMidQuality })
  );

  stats.posessionPercentage.local =
    (midChances.filter((chance) => chance.winner === "LOCAL").length /
      totalChances) *
    100;
  stats.posessionPercentage.away =
    (midChances.filter((chance) => chance.winner === "AWAY").length /
      totalChances) *
    100;

  midChances.forEach((midChance) => {
    dealWithSituation({
      messages,
      score,
      midChance,
      local,
      away,
      stats,
    });
  });

  const localAverage =
    (getTotalQuality(local.attackers) +
      getTotalQuality(local.defenders) +
      localsMidQuality +
      local.goalie) /
    11;
  const awayAverage =
    (getTotalQuality(away.attackers) +
      getTotalQuality(away.defenders) +
      awayMidQuality +
      away.goalie) /
    11;
  return {
    averages: { local: localAverage, away: awayAverage },
    score,
    stats,
    messages,
  };
}

export { getResult };
export type { Formation, ResultData };
