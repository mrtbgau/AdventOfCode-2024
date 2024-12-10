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

function countXMAS(grid) {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (isXMASCenter(grid, r, c)) {
        count++;
      }
    }
  }

  return count;
}

function isXMASCenter(grid, centerR, centerC) {
  const rows = grid.length;
  const cols = grid[0].length;

  const masPairs = [
    ["M", "A", "S"],
    ["S", "A", "M"],
  ];

  const diagonals = [
    [
      [-1, -1],
      [0, 0],
      [1, 1],
    ],
    [
      [-1, 1],
      [0, 0],
      [1, -1],
    ],
  ];

  let validCount = 0;

  for (const diagonal of diagonals) {
    let foundXMAS = false;

    for (const masPattern of masPairs) {
      let matches = true;

      for (let i = 0; i < diagonal.length; i++) {
        const [dR, dC] = diagonal[i];
        const r = centerR + dR;
        const c = centerC + dC;

        if (
          r < 0 ||
          r >= rows ||
          c < 0 ||
          c >= cols ||
          grid[r][c] !== masPattern[i]
        ) {
          matches = false;
          break;
        }
      }

      if (matches) {
        foundXMAS = true;
        break;
      }
    }

    if (foundXMAS) {
      validCount++;
    }
  }

  return validCount === 2;
}

function isXMASCenter(grid, centerR, centerC) {
  const rows = grid.length;
  const cols = grid[0].length;

  const masPairs = [
    ["M", "A", "S"],
    ["S", "A", "M"],
  ];

  const diagonals = [
    [
      [-1, -1],
      [0, 0],
      [1, 1],
    ],
    [
      [-1, 1],
      [0, 0],
      [1, -1],
    ],
  ];

  let validCount = 0;

  for (const diagonal of diagonals) {
    let foundXMAS = false;

    for (const masPattern of masPairs) {
      let matches = true;

      for (let i = 0; i < diagonal.length; i++) {
        const [dR, dC] = diagonal[i];
        const r = centerR + dR;
        const c = centerC + dC;

        if (
          r < 0 ||
          r >= rows ||
          c < 0 ||
          c >= cols ||
          grid[r][c] !== masPattern[i]
        ) {
          matches = false;
          break;
        }
      }

      if (matches) {
        foundXMAS = true;
        break;
      }
    }

    if (foundXMAS) {
      validCount++;
    }
  }

  return validCount === 2;
}

console.log(countXMAS(matrix));
