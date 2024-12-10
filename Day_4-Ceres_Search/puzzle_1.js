const input = Bun.file("input.txt");
const inputContent = await input.text();
const inputLines = inputContent.split("\n");

let matrix = [];

const fillMatrix = () => {
  inputLines.forEach((line) => {
    matrix.push(line.replace("\r", ""));
  });
};

fillMatrix();

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

function countXMAS(grid) {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const word = "XMAS";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const [dr, dc] of directions) {
        if (canSpellWord(grid, r, c, dr, dc, word)) {
          count++;
        }
      }
    }
  }

  return count;
}

function canSpellWord(grid, startR, startC, deltaR, deltaC, word) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (
    startR + deltaR * (word.length - 1) < 0 ||
    startR + deltaR * (word.length - 1) >= rows ||
    startC + deltaC * (word.length - 1) < 0 ||
    startC + deltaC * (word.length - 1) >= cols
  ) {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    const r = startR + deltaR * i;
    const c = startC + deltaC * i;

    if (grid[r][c] !== word[i]) {
      return false;
    }
  }

  return true;
}

console.log(countXMAS(matrix));
