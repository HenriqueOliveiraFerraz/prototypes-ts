import { BaseLocale } from '../base-locale/base.locale';

export class PtBr extends BaseLocale {
  constructor() {
    super(generateNumbersWordsPtBr(), 'e', 'cento', 'não encontrado');
  }

  getUnits(num: string) {
    return num != '0' ? this.numbersWords[Number(num)] : '';
  }

  getTens(num: string) {
    const tensNum = num.charAt(0);
    const tens = this.numbersWords[Number(`${num.charAt(0)}0`)];
    let result = '';

    if (tensNum != '0') {
      result = tens;
    }

    return result;
  }

  getHundreds(num: string) {
    const hundredNum = num.charAt(0);
    const hundreds = hundredNum == '1' ? this.hundredAuxiliary : this.numbersWords[Number(`${hundredNum}00`)];
    let result = '';

    if (hundredNum != '0') {
      result = hundreds;
    }

    return result;
  }

  getThousands(num: string) {
    const endIndex = num.length == 4 ? 1 : num.length == 5 ? 2 : 3;
    const thousandsNum = num.substring(0, endIndex);
    const thousands = this.numbersWords[1000];
    let result = '';

    if (thousandsNum != '0') {
      result = result.concat(`${this.numbersWords[Number(thousandsNum)]} ${thousands}`);
    }

    return result;
  }

  getNumberGroupInFull(num: string): string {
    switch (num.length) {
      case 5:
      case 4:
        return this.getThousands(num);
      case 3:
        return this.getHundreds(num);
      case 2:
        return this.getTens(num);
      case 1:
        return this.getUnits(num);
      default:
        return '';
    }
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
