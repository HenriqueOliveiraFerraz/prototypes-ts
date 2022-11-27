import { Configuration } from '../classes/configuration/configuration';

declare global {
  interface Number {
    /**
     * @usageNotes
     *
     * ### Convert a number, to it's representation in words
     *
     * ```typescript
     * prototypesConfiguration('pt-BR');
     *
     * const threeHundredEightyNine = 389;
     * const expectedResult = threeHundredEightyNine.numberInFull();
     *
     * console.log(expectedResult);
     *
     * 'trezentos e oitenta e nove'
     * ```
     *
     * @returns The representation in words of a number, based on the locale (max size of number: 1092391725462801300)
     */
    numberInFull(): string;
    /**
     * @usageNotes
     *
     * ### Convert a number, to it's representation in words
     *
     * ```typescript
     * const oneHundred = 100;
     * console.log(oneHundred.zerosAfterFirstNumber());
     *
     * 2
     * ```
     *
     * @returns The amount of zeros after first number
     */
    zerosAfterFirstNumber(): number;
    /**
     * @description
     * Converts a number to an array of up to three characters for each index that are also numbers
     *
     * @usageNotes
     *
     * ```typescript
     * const oneHundredNinety = 190;
     * console.log(oneHundredNinety.getNumberGroups());
     *
     * ['190']
     *
     * const fiftyOneThousandFifty = 51050;
     * console.log(fiftyOneThousandFifty.getNumberGroups());
     *
     * ['51', '050']
     * ```
     *
     * @returns An array of strings, grouped by each sequence of up to three numbers
     */
    getNumberGroups(): string[];
  }
}

Number.prototype.numberInFull = function (): string {
  const num = Number(this);
  const config = Configuration.getBaseLocaleExtension();

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
            const gruopRemainder = numberGroups.slice(groupIndex).join('');
            const aux = config.getAuxiliaryWord(gruopRemainder.length, group);

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
            } else if (formattedSubGroup.length == 2) {
              const hasNextGroup = numberGroups[groupIndex + 1];
              const ten = Number(formattedSubGroup);
              const canAdd = (ten >= 10 && ten <= 20) || ten % 10 == 0;

              if (canAdd && aux && hasNextGroup && !auxiliaryAdded) {
                auxiliaryAdded = true;
                result = result.concat(` ${aux}`);
              }
            } else {
              const hasNextGroup = numberGroups[groupIndex + 1];

              if (aux && hasNextGroup && !auxiliaryAdded) {
                auxiliaryAdded = true;
                result = result.concat(` ${aux}`);
              }
            }
          }
        });
      }
    });

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
