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

  const result = config.numbersWords[num];

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
    } else if (numString.length >= 4 && numString.length <= 6) {
      const first = config.numbersWords[Number(`${numString.charAt(0)}`)];
      const thousandAux = config.numbersWords[1000];
      const result = `${first}${thousandAux}`;
      console.log(result);

      for (let index = 0; index < num.zerosAfterTens(); index++) {
        console.log(index);
      }
      const hundredNumber = numString.charAt(1);
      const hundreds =
        hundredNumber == '1' ? config.hundredAuxiliary : config.numbersWords[Number(`${hundredNumber}00`)];
      const tens = config.numbersWords[Number(`${numString.charAt(2)}0`)];
      const units = config.numbersWords[Number(numString.charAt(3))];

      return `${first} ${thousandAux} ${config.andMessage} ${hundreds} ${config.andMessage} ${tens} ${config.andMessage} ${units}`;
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
