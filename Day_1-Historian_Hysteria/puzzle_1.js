const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

const inputLeftColumn = [];
const inputRightColumn = [];

let totalDistance = 0;

const filterInputColumns = () => {
  inputLines.forEach((line) => {
    inputLeftColumn.push(line.replace("\r", "").slice(0, 5));
    inputRightColumn.push(line.replace("\r", "").slice(-5));
  });
};

const calculateInputColumns = (inputLeftColumn, inputRightColumn) => {
  const distances = [];
  for (let i = 0; i < 1000; i++) {
    const distance = Math.abs(
      parseInt(inputLeftColumn.sort()[i]) - parseInt(inputRightColumn.sort()[i])
    );
    distances.push(distance);
  }
  totalDistance += distances.reduce((a, b) => a + b, 0);
};

filterInputColumns();
calculateInputColumns(inputLeftColumn, inputRightColumn);

console.log(totalDistance);
