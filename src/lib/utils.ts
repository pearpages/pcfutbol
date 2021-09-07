type RandomValue = {
  maxPositiveDiff: number;
  minValue: number;
}

function generateRandomNumber({
  minValue = 0,
  maxPositiveDiff,
}: RandomValue): number {
  return minValue + Math.ceil(Math.random() * maxPositiveDiff);
}

function makeRandomValue(maxPositiveDiff: number, minValue = 0): RandomValue {
  return { maxPositiveDiff, minValue };
}

function getRandomIndex(maxNumber: number, excluded: number[] = []) {
  let res = null;
  while (res === null) {
    let temp = Math.floor(Math.random() * maxNumber);
    if (!excluded.includes(temp)) {
      res = temp;
    }
  }
  return res;
}

export { generateRandomNumber, makeRandomValue, getRandomIndex, RandomValue };
