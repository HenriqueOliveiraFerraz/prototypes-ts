import '../number-prototypes/number.prototypes';
import { Config } from '../index';

const zero = 0;
const fifteen = 15;
const twentyOne = 21;
const thirty = 30;
const fiftyFive = 55;
const sixtyTwo = 62;
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
const twoThousand = 2000;
const twoThousandFiveHundredFortySeven = 2547;
const fiveThousandSevenHundredEightyNine = 5789;
const nineThousand = 9000;
const nineThousandNineHundredNinetyNine = 9999;
const tenThousand = 10000;

describe('numberInFull', () => {
  beforeAll(() => Config('pt-BR'));

  test('numberInFull', () => {
    expect(zero.numberInFull()).toEqual('zero');

    expect(fifteen.numberInFull()).toEqual('quinze');

    expect(twentyOne.numberInFull()).toEqual('vinte e um');

    expect(thirty.numberInFull()).toEqual('trinta');

    expect(fiftyFive.numberInFull()).toEqual('cinquenta e cinco');

    expect(sixtyTwo.numberInFull()).toEqual('sessenta e dois');

    expect(hundredSeventyFour.numberInFull()).toEqual('cento e setenta e quatro');

    expect(twoHundredFiftyFour.numberInFull()).toEqual('duzentos e cinquenta e quatro');

    expect(threeHundredEightyNine.numberInFull()).toEqual('trezentos e oitenta e nove');

    expect(fourHundredTwentySix.numberInFull()).toEqual('quatrocentos e vinte e seis');

    expect(thousand.numberInFull()).toEqual('mil');

    expect(thousandHundredFiftyNine.numberInFull()).toEqual('um mil e cento e cinquenta e nove');

    expect(oneThousandTwoHundred.numberInFull()).toEqual('um mil e duzentos');

    expect(twoThousand.numberInFull()).toEqual('dois mil');

    expect(twoThousandFiveHundredFortySeven.numberInFull()).toEqual('dois mil e quinhentos e quarenta e sete');

    expect(fiveThousandSevenHundredEightyNine.numberInFull()).toEqual('cinco mil e setecentos e oitenta e nove');

    expect(nineThousand.numberInFull()).toEqual('nove mil');

    expect(nineThousandNineHundredNinetyNine.numberInFull()).toEqual('nove mil e novecentos e noventa e nove');

    //expect(tenThousand.numberInFull()).toEqual('dez mil');

    const notFound = 1981129311293112;
    expect(notFound.numberInFull()).toEqual('não encontrado');
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
