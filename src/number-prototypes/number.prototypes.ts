import { Configuration } from '../classes/configuration/configuration';

declare global {
  interface Number {
    numberToWord(): string;
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

      return `${tens} ${config.auxiliary} ${units}`;
    } else if (numString.length == 3) {
      const hundredNumber = numString.charAt(0);
      const hundreds =
        hundredNumber == '1' ? config.hundredAuxiliary : config.numbersWords[Number(`${hundredNumber}00`)];
      const tens = config.numbersWords[Number(`${numString.charAt(1)}0`)];
      const units = config.numbersWords[Number(numString.charAt(2))];

      return `${hundreds} ${config.auxiliary} ${tens} ${config.auxiliary} ${units}`;
    } else if (numString.length == 4) {
      const first = config.numbersWords[Number(`${numString.charAt(0)}`)];
      const thousandAux = config.numbersWords[1000];
      const hundredNumber = numString.charAt(1);
      const hundreds =
        hundredNumber == '1' ? config.hundredAuxiliary : config.numbersWords[Number(`${hundredNumber}00`)];
      const tens = config.numbersWords[Number(`${numString.charAt(2)}0`)];
      const units = config.numbersWords[Number(numString.charAt(3))];

      return `${first} ${thousandAux} ${config.auxiliary} ${hundreds} ${config.auxiliary} ${tens} ${config.auxiliary} ${units}`;
    } else {
      return config.notFoundMessage;
    }
  }
};

export {};
