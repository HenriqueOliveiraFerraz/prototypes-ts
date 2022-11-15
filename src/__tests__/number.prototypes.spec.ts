/* eslint-disable prefer-const */
import '../number-prototypes/number.prototypes';
import { Config } from '../index';
import { number } from '../mocks/numbers.mock';
import { NumeroExtensoRequest } from '../http-clients/for-devs/interfaces/numero.extenso';
import { getArrayNumbersInFull, getNumberInFull } from '../http-clients/for-devs/for.devs';
import axios, { AxiosResponse, formToJSON } from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as fileContent from '../mocks/numeros.mock.json';

describe('numberInFull', () => {
  beforeAll(() => Config('pt-BR'));

  const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // it('axios', async () => {
  //   const responses: AxiosResponse<string, any>[] = [];
  //   let number: { [key: number]: string } = JSON.parse(
  //     fs.readFileSync(path.resolve(__dirname, '../mocks/numeros.int.mock.json'), 'utf8')
  //   );

  //   for (let index = 998999; index <= 10000000; index += 10000) {
  //     const res = await getNumberInFull({
  //       acao: 'escrever_extenso',
  //       unidade: 'N',
  //       txt_valor: index.toString(),
  //       tipo_letra: 'mi'
  //     });
  //     const numberInFull = res.data.trim();

  //     res.data = res.data.trim();
  //     res.data = res.data.capitalizeFirstLetter();
  //     res.data = res.data
  //       .split(' ')
  //       .map((f) => {
  //         f = f.capitalizeFirstLetter();
  //         return f;
  //       })
  //       .join('');
  //     res.data.replace(/\s/g, '');
  //     res.data = res.data.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  //     number[index] = numberInFull;

  //     responses.push(res);
  //     await pause(250);

  //     await fs.writeFile(
  //       path.resolve(__dirname, '../mocks/numeros.int.mock.json'),
  //       JSON.stringify(number, null, 2),
  //       (err) => {
  //         if (err) {
  //           console.log('Error writing file', err);
  //         } else {
  //           console.log('Successfully wrote file');
  //         }
  //       }
  //     );
  //   }

  //   await expect(responses).toBeTruthy();
  // }, 10000000);

  test('numberInFull', () => {
    let number: { [key: number]: string } = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../mocks/numeros.int.mock.json'), 'utf8')
    );
    Object.keys(number).forEach((f) => {
      const numIndex = Number(f);
      const element = number[numIndex];
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
