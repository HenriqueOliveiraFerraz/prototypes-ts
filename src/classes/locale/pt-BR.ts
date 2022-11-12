import { BaseLocale } from '../base-locale/base.locale';

export class PtBr extends BaseLocale {
  constructor() {
    super(generateNumbersWordsPtBr(), 'e', 'cento', 'não encontrado');
  }

  getTens(num: string) {
    const tens = this.numbersWords[Number(`${num.charAt(0)}0`)];
    const units = this.numbersWords[Number(num.charAt(1))];

    return `${tens} ${this.andMessage} ${units}`;
  }

  getHundreds(num: string) {
    const hundredNumber = num.charAt(0);
    const hundreds = hundredNumber == '1' ? this.hundredAuxiliary : this.numbersWords[Number(`${hundredNumber}00`)];
    const tensNum = num.charAt(1);
    let result = `${hundreds}`;

    if (tensNum != '0') {
      const tens = num.slice(1);
      result = result.concat(` ${this.andMessage} ${this.getTens(tens)}`);
    }

    return result;
  }

  getThousands(num: string) {
    const thousandsNum = num.charAt(0);
    const hundredsNum = num.charAt(1);
    const thousand = this.numbersWords[1000];
    let result = `${this.numbersWords[Number(thousandsNum)]} ${thousand}`;

    if (hundredsNum != '0') {
      const hundreds = num.slice(1);
      result = result.concat(` ${this.andMessage} ${this.getHundreds(hundreds)}`);
    }

    return result;
  }
}

function generateNumbersWordsPtBr(): string[] {
  const words = [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'quatorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove',
    'vinte'
  ];

  words[30] = 'trinta';
  words[40] = 'quarenta';
  words[50] = 'cinquenta';
  words[60] = 'sessenta';
  words[70] = 'setenta';
  words[80] = 'oitenta';
  words[90] = 'noventa';
  words[100] = 'cem';
  words[200] = 'duzentos';
  words[300] = 'trezentos';
  words[400] = 'quatrocentos';
  words[500] = 'quinhentos';
  words[600] = 'seiscentos';
  words[700] = 'setecentos';
  words[800] = 'oitocentos';
  words[900] = 'novecentos';
  words[1000] = 'mil';

  return words;
}
