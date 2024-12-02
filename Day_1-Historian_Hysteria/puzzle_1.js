const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

const inputLeftColumn = [];
const inputRightColumn = [];

const filterInputColumns = () => {
  inputLines.forEach((line) => {
    //console.log(line.replace("\r", "").length);
    inputLeftColumn.push(line.replace("\r", "").slice(0, 5));
    inputRightColumn.push(line.replace("\r", "").slice(-5));
  });
};

filterInputColumns();

//console.log(inputLines[998]);
