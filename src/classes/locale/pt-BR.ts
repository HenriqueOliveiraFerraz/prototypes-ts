import { BaseLocale } from '../base-locale/base.locale';

export class PtBr extends BaseLocale {
  constructor() {
    super(
      generateNumbersWordsPtBr(),
      'e',
      'cento',
      'mil',
      'milhão',
      'milhões',
      'bilhão',
      'bilhões',
      'trilhão',
      'trilhões',
      'quatrilhão',
      'quatrilhões',
      'quintilhão',
      'quintilhões',
      'não encontrado'
    );
  }

  forbidUnits = false;
  forbidTens = false;
  forbidHundreds = false;
  forbidNextThousand = false;
  lastTen = '';

  getUnits(num: string) {
    if (this.lastTen.charAt(0) == '1' && this.lastTen.charAt(1) != '0') {
      this.lastTen = '';
      return '';
    }

    const result = num != '0' ? this.numbersWords[Number(num)] : '';
    this.forbidUnits = false;
    return result;
  }

  getTens(num: string) {
    const tensNum = num.charAt(0);
    const tens = this.numbersWords[Number(`${num.charAt(0)}0`)];
    const searchBaseNum = this.numbersWords[Number(num)];
    let result = '';

    if (tensNum != '0' && searchBaseNum !== undefined) {
      result = searchBaseNum;
    } else if (tensNum != '0') {
      result = tens;
    }

    this.forbidUnits = searchBaseNum !== undefined;
    this.lastTen = num;

    return result;
  }

  getHundreds(num: string) {
    const hundredNum = num.charAt(0);
    const zerosAfter = Number(num).zerosAfterFirstNumber();
    const hundreds =
      hundredNum == '1' && zerosAfter < 2 ? this.hundredAuxiliary : this.numbersWords[Number(`${hundredNum}00`)];
    let result = '';

    if (hundredNum != '0') {
      result = hundreds;
    }

    return result;
  }

  getNumberGroupInFull(num: string) {
    switch (num.length) {
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

  getAuxiliaryWord(numLength: number, group: string) {
    const auxWordSuffixSingular = 'lhão';
    const auxWordSuffixPlural = 'lhões';
    switch (numLength) {
      case 21:
      case 20:
        return `quinti${auxWordSuffixPlural}`;
      case 19:
        return group.charAt(0) == '1' ? `quinti${auxWordSuffixSingular}` : `quinti${auxWordSuffixPlural}`;
      case 18:
      case 17:
        return `quatri${auxWordSuffixPlural}`;
      case 16:
        return group.charAt(0) == '1' ? `quatri${auxWordSuffixSingular}` : `quatri${auxWordSuffixPlural}`;
      case 15:
      case 14:
        return `tri${auxWordSuffixPlural}`;
      case 13:
        return group.charAt(0) == '1' ? `tri${auxWordSuffixSingular}` : `tri${auxWordSuffixPlural}`;
      case 12:
      case 11:
        return `bi${auxWordSuffixPlural}`;
      case 10:
        return group.charAt(0) == '1' ? `bi${auxWordSuffixSingular}` : `bi${auxWordSuffixPlural}`;
      case 9:
      case 8:
        return `mi${auxWordSuffixPlural}`;
      case 7:
        return group.charAt(0) == '1' ? `mi${auxWordSuffixSingular}` : `mi${auxWordSuffixPlural}`;
      case 6:
      case 5:
      case 4:
        return this.thousandAuxiliary;
      default:
        break;
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

  return words;
}
