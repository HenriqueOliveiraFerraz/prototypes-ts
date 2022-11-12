import { Configuration } from '../classes/configuration/configuration';
import { getNumberGroup } from '../functions/number-helper';

declare global {
  interface Number {
    numberInFull(): string;
    zerosAfterTens(): number;
  }
}

Number.prototype.numberInFull = function (): string {
  const num = Number(this);
  const numString = this.toString();
  const config = Configuration.createBaseLocaleExtension();

  const result = config.numbersWords[num] ?? '';

  if (result) {
    return result;
  } else {
    if (numString.length <= 2) {
      return config.getTens(numString);
    } else if (numString.length == 3) {
      return config.getHundreds(numString);
    } else if (numString.length == 4) {
      return config.getThousands(numString);
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
