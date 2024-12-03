const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

let safeCount = 0;

const isSafe = (report) => {
  const levels = report.split(" ").map(Number);
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

inputLines.forEach((report) => {
  if (isSafe(report)) {
    safeCount++;
  }
});

console.log(safeCount);
