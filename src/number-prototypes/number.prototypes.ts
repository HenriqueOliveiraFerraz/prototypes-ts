import { Configuration } from '../classes/configuration/configuration';

declare global {
  interface Number {
    numberInFull(): string;
    zerosAfterFirstNumber(): number;
  }
}

Number.prototype.numberInFull = function (): string {
  const num = Number(this);
  const numString = this.toString();
  const config = Configuration.createBaseLocaleExtension();

  let result = config.numbersWords[num] ?? '';

  if (result) {
    return result;
  } else {
    if (numString.length <= 2) {
      const tens = config.getTens(numString);
      const units = config.getUnits(numString.charAt(1));

      result = result.concat(tens.result);

      if (units.result) {
        result = result.concat(` ${config.andMessage} ${units.result}`);
      }

      return result;
    } else if (numString.length >= 3 && numString.length <= 6) {
      numString.split('').forEach((f, i) => {
        const group = numString.slice(i);
        const numberGroupInFull = config.getNumberGroupInFull(group);

        if (i == 0 && numberGroupInFull.result) {
          result = result.concat(`${numberGroupInFull.result}`);
        } else if (numberGroupInFull.result) {
          result = result.concat(` ${config.andMessage} ${numberGroupInFull.result}`);
        }
      });

      return result;
    } else {
      return config.notFoundMessage;
    }
  }
};

Number.prototype.zerosAfterFirstNumber = function (): number {
  const num = Number(this);
  const numString = num.toString();
  let zerosAfterTens = 0;

  numString.split('').forEach((f, i) => {
    if (i >= 1 && f == '0') {
      zerosAfterTens++;
    }
  });

  return zerosAfterTens;
};

export {};
