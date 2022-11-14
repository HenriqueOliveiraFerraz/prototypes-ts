import '../number-prototypes/number.prototypes';
import { Config } from '../index';
import { number } from '../mocks/numbers.mock';
import { NumeroExtensoRequest } from '../http-clients/for-devs/interfaces/numero.extenso';
import { getArrayNumbersInFull, getNumberInFull } from '../http-clients/for-devs/for.devs';
import axios, { AxiosResponse } from 'axios';
import * as fs from 'fs';
import * as path from 'path';

describe('numberInFull', () => {
  beforeAll(() => Config('pt-BR'));

  const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // it('axios', async () => {
  //   const responses: AxiosResponse<string, any>[] = [];
  //   const number: { [key: string]: string } = {};

  //   for (let index = 1; index < 5000; index++) {
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

  //     number[res.data] = numberInFull;

  //     responses.push(res);
  //     await pause(1000);
  //   }

  //   fs.writeFile(path.resolve(__dirname, './numeros.json'), JSON.stringify(number), (err) => {
  //     if (err) {
  //       console.log('Error writing file', err);
  //     } else {
  //       console.log('Successfully wrote file');
  //     }
  //   });

  //   await expect(responses).toBeTruthy();
  // });

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

    expect(number.tenThousandTen.numberInFull()).toEqual('dez mil e dez');

    expect(number.tenThousandOneHundred.numberInFull()).toEqual('dez mil e cem');

    expect(number.tenThousandHundredOne.numberInFull()).toEqual('dez mil e cento e um');

    expect(number.tenThousandHundredTen.numberInFull()).toEqual('dez mil e cento e dez');

    expect(number.tenThousandHundredEleven.numberInFull()).toEqual('dez mil e cento e onze');

    expect(number.elevenThousand.numberInFull()).toEqual('onze mil');

    expect(number.elevenThousandOneHundred.numberInFull()).toEqual('onze mil e cem');

    expect(number.elevenThousandOneHundredTen.numberInFull()).toEqual('onze mil e cento e dez');

    expect(number.elevenThousandOneHundredEleven.numberInFull()).toEqual('onze mil e cento e onze');

    expect(number.elevenThousandHundredTwelve.numberInFull()).toEqual('onze mil e cento e doze');

    expect(number.elevenThousandTwoHundredTen.numberInFull()).toEqual('onze mil e duzentos e dez');

    expect(number.elevenThousandFourHundredSeventyEight.numberInFull()).toEqual(
      'onze mil e quatrocentos e setenta e oito'
    );

    expect(number.twentyThousandOneHundredFiftyNine.numberInFull()).toEqual('vinte mil e cento e cinquenta e nove');

    expect(number.fiftyOneThousandFifty.numberInFull()).toEqual('cinquenta e um mil e cinquenta');

    const notFound = 1981129311293112;
    expect(notFound.numberInFull()).toEqual('não encontrado');
  });
});

describe('zerosAfterFirstNumber', () => {
  beforeAll(() => Config('pt-BR'));

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
