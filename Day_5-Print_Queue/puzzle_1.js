const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

const rules = [];
const updates = [];
const correctUpdates = [];
const ruleRegEx = /^([0-9]{2})\|([0-9]{2})$/;

let isCorrect = false;

let middleResult = 0;

inputLines.forEach((line) => {
  line = line.replace("\r", "");
  const match = line.match(ruleRegEx);
  if (line.match(ruleRegEx) !== null) {
    rules.push([parseInt(match[1]), parseInt(match[2])]);
  } else {
    updates.push(line);
  }
});

for (let u = 0; u < updates.length; u++) {
  let isUpdateCorrect = true;

  for (let r = 0; r < rules.length; r++) {
    if (
      updates[u].includes(rules[r][0].toString()) &&
      updates[u].includes(rules[r][1].toString())
    ) {
      const updatePages = updates[u].split(",");
      const beforeIndex = updatePages.indexOf(rules[r][0].toString());
      const afterIndex = updatePages.indexOf(rules[r][1].toString());

      if (beforeIndex > afterIndex) {
        isUpdateCorrect = false;
        break;
      }
    }
  }

  if (isUpdateCorrect) {
    correctUpdates.push(updates[u]);
  }
}

correctUpdates.forEach((update) => {
  const updateArray = update.split(",");
  const middle = updateArray[Math.floor(updateArray.length / 2)];
  console.log(middle);
  middleResult += parseInt(middle);
});

console.log(middleResult);
