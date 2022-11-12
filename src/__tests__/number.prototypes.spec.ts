import '../number-prototypes/number.prototypes';
import { Config } from '../index';

describe('numberToWord', () => {
  beforeAll(() => Config('pt-BR'));

  test('numberToWord', () => {
    const zero = 0;
    expect(zero.numberToWord()).toEqual('zero');

    const fiftyFive = 55;
    expect(fiftyFive.numberToWord()).toEqual('cinquenta e cinco');

    const hundredSeventyFour = 174;
    expect(hundredSeventyFour.numberToWord()).toEqual('cento e setenta e quatro');

    const twoHundredFiftyFour = 254;
    expect(twoHundredFiftyFour.numberToWord()).toEqual('duzentos e cinquenta e quatro');

    const threeHundredEightyNine = 389;
    expect(threeHundredEightyNine.numberToWord()).toEqual('trezentos e oitenta e nove');

    const fourHundredTwentySix = 426;
    expect(fourHundredTwentySix.numberToWord()).toEqual('quatrocentos e vinte e seis');

    const thousand = 1000;
    expect(thousand.numberToWord()).toEqual('mil');

    const thousandHundredFiftyNine = 1159;
    expect(thousandHundredFiftyNine.numberToWord()).toEqual('mil cento e cinquenta e nove');
  });
});
