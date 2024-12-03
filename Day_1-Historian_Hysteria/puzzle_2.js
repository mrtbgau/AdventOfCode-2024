const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

const inputLeftColumn = [];
const inputRightColumn = [];

let similarityScore = 0;

const filterInputColumns = () => {
  inputLines.forEach((line) => {
    inputLeftColumn.push(line.replace("\r", "").slice(0, 5));
    inputRightColumn.push(line.replace("\r", "").slice(-5));
  });
};

filterInputColumns();
console.log(similarityScore);
