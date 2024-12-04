import { log } from "console";

const input = Bun.file("input.txt");
const inputContent = await input.text();

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

const getAllDigitsToMultilply = () => {
  const matches = [...inputContent.matchAll(regex)];
  return matches.map((match) => [parseInt(match[1]), parseInt(match[2])]);
};
