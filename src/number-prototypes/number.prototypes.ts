import { numbersWords } from '../functions/numbers.words';

declare global {
  interface Number {
    numberToWord(): string;
  }
}

Number.prototype.numberToWord = function (): string {
  const num = Number(this);
  const result = numbersWords('').find((f, i) => i === this);
  console.log(result);
  return numbersWords('pt-BR')[num];
};

export {};
