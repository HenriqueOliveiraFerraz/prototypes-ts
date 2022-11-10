import { numbersWords } from '../functions/numbers.words';

declare global {
  interface Number {
    numberToWord(): string;
  }
}

Number.prototype.numberToWord = function (): string {
  const num = Number(this);
  const numString = this.toString();

  const result = numbersWords('pt-BR')[num];

  if (result) {
    return result;
  } else {
    if (numString.length < 100) {
      const tens = numbersWords('')[Number(`${numString.charAt(0)}0`)];
      const units = numbersWords('')[Number(numString.charAt(1))];

      return `${tens} e ${units}`;
    }

    return numString;
  }
};

export {};
