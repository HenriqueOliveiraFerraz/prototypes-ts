import '../number-prototypes/number.prototypes';
import { prototypesConfiguration } from '../index';
import numberJson from '../__mocks__/numeros.int.mock.json';

const number = {
  zero: 0,
  fifteen: 15,
  twentyOne: 21,
  thirty: 30,
  fiftyFive: 55,
  sixtyTwo: 62,
  ninetyNine: 99,
  oneHundred: 100,
  oneHundredOne: 101,
  oneHundredTen: 110,
  oneHundredNinety: 190,
  hundredSeventyFour: 174,
  twoHundredFiftyFour: 254,
  threeHundredEightyNine: 389,
  fourHundredTwentySix: 426,
  fiveHundred: 500,
  thousand: 1000,
  oneThousandTen: 1010,
  thousandHundredFiftyNine: 1159,
  oneThousandTwoHundred: 1200,
  oneThousandTwoHundredOne: 1201,
  oneThousandFiveHundred: 1500,
  twoThousand: 2000,
  twoThousandOne: 2001,
  twoThousandFiveHundredFortySeven: 2547,
  fiveThousandSevenHundredEightyNine: 5789,
  nineThousand: 9000,
  nineThousandOneHundredOne: 9101,
  nineThousandNineHundredNinetyNine: 9999,
  tenThousand: 10000,
  tenThousandOne: 10001,
  tenThousandTen: 10010,
  tenThousandOneHundred: 10100,
  tenThousandHundredOne: 10101,
  tenThousandHundredTen: 10110,
  tenThousandHundredEleven: 10111,
  elevenThousand: 11000,
  elevenThousandOneHundred: 11100,
  elevenThousandOneHundredTen: 11110,
  elevenThousandOneHundredEleven: 11111,
  elevenThousandHundredTwelve: 11112,
  elevenThousandTwoHundredTen: 11210,
  elevenThousandFourHundredSeventyEight: 11478,
  twentyThousandOneHundredFiftyNine: 20159,
  fiftyOneThousandFifty: 51050
};

beforeAll(() => prototypesConfiguration('pt-BR'));

describe('numberInFull', () => {
  it('should convert a number, to its representation in words', () => {
    Object.keys(numberJson).forEach((key) => {
      const numIndex = Number(key);
      const element = numberJson[key as keyof typeof numberJson];
      expect(numIndex.numberInFull()).toEqual(element);
    });
  });
});

describe('getNumberGroups', () => {
  it('should convert a number to an array of up to three characters for each index that are also numbers', () => {
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
  it('should return the right amount of zeros after first number', () => {
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
