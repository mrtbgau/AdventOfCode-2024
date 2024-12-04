const input = Bun.file("input.txt");
const inputContent = await input.text();

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let multiplications = [];

let allResults = 0;

const getAllDigitsToMultilply = () => {
  const matches = [...inputContent.matchAll(regex)];
  multiplications = matches.map((match) => [
    parseInt(match[1]),
    parseInt(match[2]),
  ]);
};

getAllDigitsToMultilply();

multiplications.forEach((mul) => {
  const result = mul.reduce((a, b) => a * b, 1);
  allResults += result;
});

console.log(allResults);
