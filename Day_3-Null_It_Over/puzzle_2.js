const input = Bun.file("input.txt");
const inputContent = await input.text();

const mul = /mul\((\d{1,3}),(\d{1,3})\)/g;
const toDo = /do\(\)/g;
const toDont = /don't\(\)/g;

let multiplications = [];

let allResults = 0;

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

getAllMulPositions();
getAllDoPositions();
getAllDontPositions();
getAllPositions();

// const getAllDigitsToMultilply = () => {
//   const matches = [...inputContent.matchAll(mul)];
//   multiplications = matches.map((match) => [
//     parseInt(match[1]),
//     parseInt(match[2]),
//   ]);
// };

// getAllDigitsToMultilply();

// multiplications.forEach((mul) => {
//   const result = mul.reduce((a, b) => a * b, 1);
//   allResults += result;
// });

// console.log(allResults);
