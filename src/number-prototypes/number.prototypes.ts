import { Configuration } from '../classes/configuration/configuration';

declare global {
  interface Number {
    numberToWord(): string;
    zerosAfterTens(): number;
  }
}

Number.prototype.numberToWord = function (): string {
  const num = Number(this);
  const numString = this.toString();
  const config = Configuration.createBaseLocaleExtension();

  let result = config.numbersWords[num];

  if (result) {
    return result;
  } else {
    if (numString.length <= 2) {
      const tens = config.numbersWords[Number(`${numString.charAt(0)}0`)];
      const units = config.numbersWords[Number(numString.charAt(1))];

      return `${tens} ${config.andMessage} ${units}`;
    } else if (numString.length == 3) {
      const hundredNumber = numString.charAt(0);
      const hundreds =
        hundredNumber == '1' ? config.hundredAuxiliary : config.numbersWords[Number(`${hundredNumber}00`)];
      const tens = config.numbersWords[Number(`${numString.charAt(1)}0`)];
      const units = config.numbersWords[Number(numString.charAt(2))];

      return `${hundreds} ${config.andMessage} ${tens} ${config.andMessage} ${units}`;
    } else if (numString.length >= 4 && numString.length <= 5) {
      const first = config.numbersWords[Number(`${numString.charAt(0)}`)];
      const thousandAux = config.numbersWords[1000];
      const hundredNumber = numString.charAt(1);
      const hundreds =
        hundredNumber == '1' ? config.hundredAuxiliary : config.numbersWords[Number(`${hundredNumber}00`)];
      const tens = config.numbersWords[Number(`${numString.charAt(2)}0`)];
      const units = config.numbersWords[Number(numString.charAt(3))];

      result = `${first} ${thousandAux}`;

      numString.split('').forEach((f, i) => {
        if (i == 1 && f != '0') {
          result = result.concat(` ${config.andMessage} ${hundreds}`);
        } else if (i == 2 && f != '0') {
          result = result.concat(` ${config.andMessage} ${tens}`);
        } else if (i == 3 && f != '0') {
          result = result.concat(` ${config.andMessage} ${units}`);
        }
      });

      return result;
    } else {
      return config.notFoundMessage;
    }
  }
};

Number.prototype.zerosAfterTens = function (): number {
  const num = Number(this);
  const numString = num.toString();
  let zerosAfterTens = 0;

  if (numString.length >= 2) {
    numString.split('').forEach((f, i) => {
      if (i >= 2 && f == '0') {
        zerosAfterTens++;
      }
    });
  }

  return zerosAfterTens;
};

export {};
