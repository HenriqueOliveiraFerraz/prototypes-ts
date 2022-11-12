import '../number-prototypes/number.prototypes';
import { Config } from '../index';

const zero = 0;
const fifteen = 15;
const fiftyFive = 55;
const oneHundred = 100;
const oneHundredTen = 110;
const oneHundredNinety = 190;
const hundredSeventyFour = 174;
const twoHundredFiftyFour = 254;
const threeHundredEightyNine = 389;
const fourHundredTwentySix = 426;
const thousand = 1000;
const thousandHundredFiftyNine = 1159;
const oneThousandTwoHundred = 1200;
const twoThousandFiveHundredFortySeven = 2547;
const fiveThousandSevenHundredEightyNine = 5789;
const nineThousandNineHundredNinetyNine = 9999;

describe('numberToWord', () => {
  beforeAll(() => Config('pt-BR'));

  test('numberToWord', () => {
    expect(zero.numberToWord()).toEqual('zero');

    expect(fifteen.numberToWord()).toEqual('quinze');

    expect(fiftyFive.numberToWord()).toEqual('cinquenta e cinco');

    expect(hundredSeventyFour.numberToWord()).toEqual('cento e setenta e quatro');

    expect(twoHundredFiftyFour.numberToWord()).toEqual('duzentos e cinquenta e quatro');

    expect(threeHundredEightyNine.numberToWord()).toEqual('trezentos e oitenta e nove');

    expect(fourHundredTwentySix.numberToWord()).toEqual('quatrocentos e vinte e seis');

    expect(thousand.numberToWord()).toEqual('mil');

    expect(thousandHundredFiftyNine.numberToWord()).toEqual('um mil e cento e cinquenta e nove');

    expect(twoThousandFiveHundredFortySeven.numberToWord()).toEqual('dois mil e quinhentos e quarenta e sete');

    expect(fiveThousandSevenHundredEightyNine.numberToWord()).toEqual('cinco mil e setecentos e oitenta e nove');

    expect(nineThousandNineHundredNinetyNine.numberToWord()).toEqual('nove mil e novecentos e noventa e nove');

    const notFound = 1981129311293112;
    expect(notFound.numberToWord()).toEqual('não encontrado');
  });
});

describe('zerosAfterTens', () => {
  beforeAll(() => Config('pt-BR'));

  test('zerosAfterTens', () => {
    expect(zero.zerosAfterTens()).toEqual(0);

    expect(fifteen.zerosAfterTens()).toEqual(0);

    expect(fiftyFive.zerosAfterTens()).toEqual(0);

    expect(oneHundred.zerosAfterTens()).toEqual(1);

    expect(oneHundredTen.zerosAfterTens()).toEqual(1);

    expect(oneHundredNinety.zerosAfterTens()).toEqual(1);

    expect(hundredSeventyFour.zerosAfterTens()).toEqual(0);

    expect(twoHundredFiftyFour.zerosAfterTens()).toEqual(0);

    expect(threeHundredEightyNine.zerosAfterTens()).toEqual(0);

    expect(fourHundredTwentySix.zerosAfterTens()).toEqual(0);

    expect(thousand.zerosAfterTens()).toEqual(2);

    expect(oneThousandTwoHundred.zerosAfterTens()).toEqual(2);

    expect(thousandHundredFiftyNine.zerosAfterTens()).toEqual(0);

    expect(twoThousandFiveHundredFortySeven.zerosAfterTens()).toEqual(0);

    expect(fiveThousandSevenHundredEightyNine.zerosAfterTens()).toEqual(0);

    expect(nineThousandNineHundredNinetyNine.zerosAfterTens()).toEqual(0);
  });
});
