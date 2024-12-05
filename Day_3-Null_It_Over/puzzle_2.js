const input = Bun.file("input.txt");
const inputContent = await input.text();

const mul = /mul\((\d{1,3}),(\d{1,3})\)/g;
const toDo = /do\(\)/g;
const toDont = /don't\(\)/g;

let total = 0;

let allMulPositions = [];
let allDoPositions = [];
let allDontPositions = [];
let allPositions = [];

const getAllMulPositions = () => {
  const matches = [...inputContent.matchAll(mul)];
  allMulPositions = matches.map((match) => ({
    match: match[0],
    position: match.index,
  }));
};

const getAllDoPositions = () => {
  const matches = [...inputContent.matchAll(toDo)];
  allDoPositions = matches.map((match) => ({
    match: match[0],
    position: match.index,
  }));
};

const getAllDontPositions = () => {
  const matches = [...inputContent.matchAll(toDont)];
  allDontPositions = matches.map((match) => ({
    match: match[0],
    position: match.index,
  }));
};

const getAllPositions = () => {
  allPositions = allMulPositions
    .concat(allDoPositions, allDontPositions)
    .sort((a, b) => a.position - b.position);
};

const calculateTotal = () => {
  let isEnabled = true;

  for (const instruction of allPositions) {
    if (instruction.match.match(toDo)) {
      isEnabled = true;
    } else if (instruction.match.match(toDont)) {
      isEnabled = false;
    } else if (instruction.match.match(mul)) {
      if (isEnabled) {
        const [x, y] = instruction.match.match(/\d+/g).map(Number);
        total += x * y;
      }
    }
  }
};

getAllMulPositions();
getAllDoPositions();
getAllDontPositions();
getAllPositions();
calculateTotal();

console.log(total);
