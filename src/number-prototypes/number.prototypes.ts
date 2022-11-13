import { Configuration } from '../classes/configuration/configuration';

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

  let result = config.numbersWords[num] ?? '';

  if (result) {
    return result;
  } else {
    if (numString.length <= 2) {
      const tens = config.getTens(numString);
      const units = config.getUnits(numString.charAt(1));

      result = result.concat(tens);

      if (units) {
        result = result.concat(` ${config.andMessage} ${units}`);
      }

      return result;
    } else if (numString.length == 3) {
      const hundreds = config.getHundreds(numString);
      const tens = config.getTens(numString.charAt(1));
      const units = config.getUnits(numString.charAt(2));

      result = result.concat(hundreds);

      [tens, units].forEach((f) => {
        if (f) {
          result = result.concat(` ${config.andMessage} ${f}`);
        }
      });

      return result;
    } else if (numString.length >= 4 && numString.length <= 5) {
      numString.split('').forEach((f, i) => {
        const group = numString.slice(i);
        const numberGroupInFull = config.getNumberGroupInFull(group);

        if (i == 0 && numberGroupInFull) {
          result = result.concat(`${numberGroupInFull}`);
        } else if (numberGroupInFull) {
          result = result.concat(` ${config.andMessage} ${numberGroupInFull}`);
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
