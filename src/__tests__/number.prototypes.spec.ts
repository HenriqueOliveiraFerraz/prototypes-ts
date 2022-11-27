import '../number-prototypes/number.prototypes';
import { Config } from '../index';
import { number } from '../__mocks__/jestGlobalMocks';
import numberJson from '../__mocks__/numeros.int.mock.json';

describe('numberInFull', () => {
  beforeAll(() => Config('pt-BR'));
  test('numberInFull', () => {
    Object.keys(numberJson).forEach((key) => {
      const numIndex = Number(key);
      const element = numberJson[key as keyof typeof numberJson];
      expect(numIndex.numberInFull()).toEqual(element);
    });
  });
});

describe('getNumberGroups', () => {
  beforeAll(() => Config('pt-BR'));

  test('getNumberGroups', () => {
    expect(number.oneHundredNinety.getNumberGroups()).toEqual(['190']);
    expect(number.oneThousandTen.getNumberGroups()).toEqual(['1', '010']);
    expect(number.oneThousandFiveHundred.getNumberGroups()).toEqual(['1', '500']);
    expect(number.twoThousandFiveHundredFortySeven.getNumberGroups()).toEqual(['2', '547']);
    expect(number.nineThousand.getNumberGroups()).toEqual(['9', '000']);
    expect(number.tenThousand.getNumberGroups()).toEqual(['10', '000']);
    expect(number.elevenThousandFourHundredSeventyEight.getNumberGroups()).toEqual(['11', '478']);
    expect(number.twentyThousandOneHundredFiftyNine.getNumberGroups()).toEqual(['20', '159']);
    expect(number.fiftyOneThousandFifty.getNumberGroups()).toEqual(['51', '050']);
  });
});

describe('zerosAfterFirstNumber', () => {
  test('zerosAfterFirstNumber', () => {
    expect(number.zero.zerosAfterFirstNumber()).toEqual(0);

    expect(number.fifteen.zerosAfterFirstNumber()).toEqual(0);

    expect(number.fiftyFive.zerosAfterFirstNumber()).toEqual(0);

    expect(number.oneHundred.zerosAfterFirstNumber()).toEqual(2);

    expect(number.oneHundredTen.zerosAfterFirstNumber()).toEqual(1);

    expect(number.oneHundredNinety.zerosAfterFirstNumber()).toEqual(1);

    expect(number.hundredSeventyFour.zerosAfterFirstNumber()).toEqual(0);

    expect(number.twoHundredFiftyFour.zerosAfterFirstNumber()).toEqual(0);

    expect(number.threeHundredEightyNine.zerosAfterFirstNumber()).toEqual(0);

    expect(number.fourHundredTwentySix.zerosAfterFirstNumber()).toEqual(0);

    expect(number.thousand.zerosAfterFirstNumber()).toEqual(3);

    expect(number.oneThousandTwoHundred.zerosAfterFirstNumber()).toEqual(2);

    expect(number.thousandHundredFiftyNine.zerosAfterFirstNumber()).toEqual(0);

    expect(number.twoThousandFiveHundredFortySeven.zerosAfterFirstNumber()).toEqual(0);

    expect(number.fiveThousandSevenHundredEightyNine.zerosAfterFirstNumber()).toEqual(0);

    expect(number.nineThousandNineHundredNinetyNine.zerosAfterFirstNumber()).toEqual(0);
  });
});
