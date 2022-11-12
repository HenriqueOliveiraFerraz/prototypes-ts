import '../number-prototypes/number.prototypes';
import { Config } from '../index';

describe('numberToWord', () => {
  beforeAll(() => Config('pt-BR'));

  test('numberToWord', () => {
    const zero = 0;
    expect(zero.numberToWord()).toEqual('zero');

    const fifteen = 15;
    expect(fifteen.numberToWord()).toEqual('quinze');

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
    expect(thousandHundredFiftyNine.numberToWord()).toEqual('um mil e cento e cinquenta e nove');

    const twoThousandFiveHundredFortySeven = 2547;
    expect(twoThousandFiveHundredFortySeven.numberToWord()).toEqual('dois mil e quinhentos e quarenta e sete');

    const fiveThousandSevenHundredEightyNine = 5789;
    expect(fiveThousandSevenHundredEightyNine.numberToWord()).toEqual('cinco mil e setecentos e oitenta e nove');

    const nineThousandNineHundredNinetyNine = 9999;
    expect(nineThousandNineHundredNinetyNine.numberToWord()).toEqual('nove mil e novecentos e noventa e nove');

    const notFound = 1981129311293112;
    expect(notFound.numberToWord()).toEqual('não encontrado');
  });
});
