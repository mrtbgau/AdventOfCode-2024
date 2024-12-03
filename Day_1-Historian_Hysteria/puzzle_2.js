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

const calculateSimilarityScore = (inputLeftColumn, inputRightColumn) => {
  const scores = [];
  inputLeftColumn.forEach((leftElement) => {
    let score = 0;
    inputRightColumn.forEach((rightElement) => {
      if (leftElement == rightElement) {
        score++;
      }
    });
    scores.push(leftElement * score);
    console.log(`${leftElement} = ${scores}`);
  });
  similarityScore += scores.reduce((a, b) => a + b, 0);
};

filterInputColumns();
calculateSimilarityScore(inputLeftColumn, inputRightColumn);

console.log(similarityScore);
