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
  } else {
    const numberGroups = num.getNumberGroups();
    numberGroups.forEach((group, groupIndex) => {
      if (group != '0') {
        let auxiliaryAdded = false;
        group.split('').forEach((subGroup, subGroupIndex) => {
          if (subGroup && subGroup != '0') {
            const formattedSubGroup = group.slice(subGroupIndex).replace(/^0+/, '');
            const numberGroupInFull = config.getNumberGroupInFull(formattedSubGroup);
            const aux = config.getAuxiliaryWord(numString.length - groupIndex, group);

            if (!result && numberGroupInFull) {
              result = result.concat(`${numberGroupInFull}`);
            } else if (numberGroupInFull) {
              result = result.concat(` ${config.andMessage} ${numberGroupInFull}`);
            }

            if (formattedSubGroup.length == 3) {
              const hasNextGroup = numberGroups[groupIndex + 1];
              const ten = Number(formattedSubGroup.charAt(1));
              const unit = Number(formattedSubGroup.charAt(2));
              const canAdd = unit == 0 && ten < 1;

              if (canAdd && aux && hasNextGroup && !auxiliaryAdded) {
                auxiliaryAdded = true;
                result = result.concat(` ${aux}`);
              }
            } else {
              const hasNextGroup = numberGroups[groupIndex + 1];
              const unit = Number(formattedSubGroup.charAt(1));
              const canAdd = unit == 0;

              if (canAdd && aux && hasNextGroup && !auxiliaryAdded) {
                auxiliaryAdded = true;
                result = result.concat(` ${aux}`);
              }
            }
          }
        });
      }
    });

    if (!result) {
      return config.notFoundMessage;
    }

    return result;
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
