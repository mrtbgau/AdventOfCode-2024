const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

let safeCount = 0;

const isSafe = (levels) => {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < levels.length - 1; i++) {
    const diff = levels[i + 1] - levels[i];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (diff > 0) decreasing = false;
    if (diff < 0) increasing = false;
  }

  return increasing || decreasing;
};

const canBeSafeWithOneRemoval = (levels) => {
  for (let i = 0; i < levels.length; i++) {
    const newLevels = levels.slice(0, i).concat(levels.slice(i + 1));

    if (isSafe(newLevels)) {
      return true;
    }
  }

  return false;
};

inputLines.forEach((report) => {
  const levels = report
    .split(" ")
    .map(Number)
    .filter((n) => !isNaN(n));
  if (isSafe(levels) || canBeSafeWithOneRemoval(levels)) {
    safeCount++;
  }
});

console.log(safeCount);
