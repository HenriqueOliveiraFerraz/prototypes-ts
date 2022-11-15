import { Configuration } from '../classes/configuration/configuration';

declare global {
  interface Number {
    numberInFull(): string;
    zerosAfterFirstNumber(): number;
    getNumberGroups(): string[];
  }
}

Number.prototype.numberInFull = function (): string {
  const num = Number(this);
  const numString = this.toString();
  const config = Configuration.createBaseLocaleExtension();

  let result = config.numbersWords[num] ?? '';

  if (result) {
    return result;
  } else if (numString.length > 1) {
    const amountOfGroups = Math.ceil(numString.length / 3);
    numString.split('').forEach((f, i) => {
      if (f != '0') {
        const group = numString.slice(i).replace(/^0+/, '');
        const numberGroupInFull = config.getNumberGroupInFull(group);

        if (i == 0 && numberGroupInFull) {
          result = result.concat(`${numberGroupInFull}`);
        } else if (numberGroupInFull) {
          result = result.concat(` ${config.andMessage} ${numberGroupInFull}`);
        }
      }
    });

    return result;
  } else {
    return config.notFoundMessage;
  }
};

Number.prototype.zerosAfterFirstNumber = function (): number {
  const num = Number(this);
  const numString = num.toString();
  let zerosAfterFirstNumber = 0;

  numString.split('').forEach((f, i) => {
    if (i >= 1 && f == '0') {
      zerosAfterFirstNumber++;
    }
  });

  return zerosAfterFirstNumber;
};

Number.prototype.getNumberGroups = function (): string[] {
  const numString = this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const chunks: string[] = numString.split(',');

  return chunks;
};

export {};
