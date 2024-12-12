const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

const rules = [];
const updates = [];
const ruleRegEx = /^([0-9]{2})\|([0-9]{2})$/;

inputLines.forEach((line) => {
  line = line.replace("\r", "");
  const match = line.match(ruleRegEx);
  if (line.match(ruleRegEx) !== null) {
    rules.push([parseInt(match[1]), parseInt(match[2])]);
  } else if (line.includes(",")) {
    updates.push(line.split(",").map(Number));
  }
});

function isUpdateCorrect(update, rules) {
  for (const [before, after] of rules) {
    if (update.includes(before) && update.includes(after)) {
      const beforeIndex = update.indexOf(before);
      const afterIndex = update.indexOf(after);

      if (beforeIndex > afterIndex) {
        return false;
      }
    }
  }
  return true;
}

function reorderUpdate(update) {
  let orderedUpdate = [...update];
  let changed;

  do {
    changed = false;
    for (const [before, after] of rules) {
      if (orderedUpdate.includes(before) && orderedUpdate.includes(after)) {
        const beforeIndex = orderedUpdate.indexOf(before);
        const afterIndex = orderedUpdate.indexOf(after);

        if (beforeIndex > afterIndex) {
          // Swap the elements
          [orderedUpdate[beforeIndex], orderedUpdate[afterIndex]] = [
            orderedUpdate[afterIndex],
            orderedUpdate[beforeIndex],
          ];
          changed = true;
        }
      }
    }
  } while (changed);

  return orderedUpdate;
}

const incorrectUpdates = updates.filter(
  (update) => !isUpdateCorrect(update, rules)
);

const reorderedUpdates = incorrectUpdates.map(reorderUpdate);

const middlePageSum = reorderedUpdates.reduce((sum, update) => {
  const middleIndex = Math.floor(update.length / 2);
  return sum + update[middleIndex];
}, 0);

console.log(middlePageSum);
