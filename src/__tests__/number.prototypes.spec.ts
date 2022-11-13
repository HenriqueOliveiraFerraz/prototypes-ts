import '../number-prototypes/number.prototypes';
import { Config } from '../index';
import { number } from '../mocks/numbers.mock';

describe('numberInFull', () => {
  beforeAll(() => Config('pt-BR'));

  test('numberInFull', () => {
    expect(number.zero.numberInFull()).toEqual('zero');

    expect(number.fifteen.numberInFull()).toEqual('quinze');

    expect(number.twentyOne.numberInFull()).toEqual('vinte e um');

    expect(number.thirty.numberInFull()).toEqual('trinta');

    expect(number.fiftyFive.numberInFull()).toEqual('cinquenta e cinco');

    expect(number.sixtyTwo.numberInFull()).toEqual('sessenta e dois');

    expect(number.ninetyNine.numberInFull()).toEqual('noventa e nove');

    expect(number.oneHundred.numberInFull()).toEqual('cem');

    expect(number.oneHundredOne.numberInFull()).toEqual('cento e um');

    expect(number.hundredSeventyFour.numberInFull()).toEqual('cento e setenta e quatro');

    expect(number.twoHundredFiftyFour.numberInFull()).toEqual('duzentos e cinquenta e quatro');

    expect(number.threeHundredEightyNine.numberInFull()).toEqual('trezentos e oitenta e nove');

    expect(number.fiveHundred.numberInFull()).toEqual('quinhentos');

    expect(number.fourHundredTwentySix.numberInFull()).toEqual('quatrocentos e vinte e seis');

    expect(number.thousand.numberInFull()).toEqual('mil');

    expect(number.oneThousandTen.numberInFull()).toEqual('um mil e dez');

    expect(number.thousandHundredFiftyNine.numberInFull()).toEqual('um mil e cento e cinquenta e nove');

    expect(number.oneThousandTwoHundred.numberInFull()).toEqual('um mil e duzentos');

    expect(number.oneThousandFiveHundred.numberInFull()).toEqual('um mil e quinhentos');

    expect(number.oneThousandTwoHundredOne.numberInFull()).toEqual('um mil e duzentos e um');

    expect(number.twoThousand.numberInFull()).toEqual('dois mil');

    expect(number.twoThousandOne.numberInFull()).toEqual('dois mil e um');

    expect(number.twoThousandFiveHundredFortySeven.numberInFull()).toEqual('dois mil e quinhentos e quarenta e sete');

    expect(number.fiveThousandSevenHundredEightyNine.numberInFull()).toEqual('cinco mil e setecentos e oitenta e nove');

    expect(number.nineThousand.numberInFull()).toEqual('nove mil');

    expect(number.nineThousandOneHundredOne.numberInFull()).toEqual('nove mil e cento e um');

    expect(number.nineThousandNineHundredNinetyNine.numberInFull()).toEqual('nove mil e novecentos e noventa e nove');

    expect(number.tenThousand.numberInFull()).toEqual('dez mil');

    expect(number.tenThousandOne.numberInFull()).toEqual('dez mil e um');

    // expect(number.tenThousandTen.numberInFull()).toEqual('dez mil e dez');

    // expect(number.tenThousandOneHundred.numberInFull()).toEqual('dez mil e cem');

    // expect(number.tenThousandHundredOne.numberInFull()).toEqual('dez mil e cento e um');

    // expect(number.tenThousandHundredTen.numberInFull()).toEqual('dez mil e cento e dez');

    // expect(number.tenThousandHundredEleven.numberInFull()).toEqual('dez mil e cento e onze');

    //expect(number.elevenThousand.numberInFull()).toEqual('onze mil');

    const notFound = 1981129311293112;
    expect(notFound.numberInFull()).toEqual('não encontrado');
  });
});

describe('zerosAfterTens', () => {
  beforeAll(() => Config('pt-BR'));

  test('zerosAfterTens', () => {
    expect(number.zero.zerosAfterTens()).toEqual(0);

    expect(number.fifteen.zerosAfterTens()).toEqual(0);

    expect(number.fiftyFive.zerosAfterTens()).toEqual(0);

    expect(number.oneHundred.zerosAfterTens()).toEqual(1);

    expect(number.oneHundredTen.zerosAfterTens()).toEqual(1);

    expect(number.oneHundredNinety.zerosAfterTens()).toEqual(1);

    expect(number.hundredSeventyFour.zerosAfterTens()).toEqual(0);

    expect(number.twoHundredFiftyFour.zerosAfterTens()).toEqual(0);

    expect(number.threeHundredEightyNine.zerosAfterTens()).toEqual(0);

    expect(number.fourHundredTwentySix.zerosAfterTens()).toEqual(0);

    expect(number.thousand.zerosAfterTens()).toEqual(2);

    expect(number.oneThousandTwoHundred.zerosAfterTens()).toEqual(2);

    expect(number.thousandHundredFiftyNine.zerosAfterTens()).toEqual(0);

    expect(number.twoThousandFiveHundredFortySeven.zerosAfterTens()).toEqual(0);

    expect(number.fiveThousandSevenHundredEightyNine.zerosAfterTens()).toEqual(0);

    expect(number.nineThousandNineHundredNinetyNine.zerosAfterTens()).toEqual(0);
  });
});
