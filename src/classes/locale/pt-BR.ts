import { BaseLocale } from '../base-locale/base.locale';

export class PtBr extends BaseLocale {
  constructor() {
    super(generateNumbersWordsPtBr(), 'e', 'cento', 'mil', 'não encontrado');
  }

  forbidUnits = false;
  forbidTens = false;
  forbidHundreds = false;
  forbidNextThousand = false;

  getUnits(num: string) {
    const result = num != '0' && !this.forbidUnits ? this.numbersWords[Number(num)] : '';
    this.forbidUnits = false;
    return result;
  }

  getTens(num: string) {
    const tensNum = num.charAt(0);
    const tens = this.numbersWords[Number(`${num.charAt(0)}0`)];
    const unitsNum = num.charAt(1);
    const searchBaseNum = this.numbersWords[Number(num)];
    let result = '';

    if (tensNum != '0' && searchBaseNum !== undefined) {
      result = searchBaseNum;
    } else if (tensNum != '0') {
      result = tens;
    }

    this.forbidUnits = unitsNum == '0' || (tensNum != '0' && unitsNum != '0' && searchBaseNum !== undefined);

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

  getThousands(num: string) {
    const endIndex = this.getThousandEndIndex(num);
    const thousandsNum = num.substring(0, endIndex);
    let searchBaseNum = '';
    let result = '';

    thousandsNum.split('').forEach((f, i) => {
      const subGroup = thousandsNum.slice(i);
      const numberGroupInFull = this.getNumberGroupInFull(subGroup.length > 1 ? subGroup : f);

      if (i == 0 && numberGroupInFull) {
        searchBaseNum = searchBaseNum.concat(numberGroupInFull);
      } else if (numberGroupInFull) {
        searchBaseNum = searchBaseNum.concat(` ${this.andMessage} ` + numberGroupInFull);
      }
    });

    if (thousandsNum != '0' && !this.forbidNextThousand) {
      this.forbidNextThousand = false;
      result = result.concat(`${searchBaseNum} ${this.thousandAuxiliary}`);
    }

    this.forbidNextThousand = searchBaseNum !== undefined;

    return result;
  }

  getNumberGroupInFull(num: string) {
    switch (num.length) {
      case 6:
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

  getThousandEndIndex(num: string) {
    return num.length - 3;
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
  //words[1000] = 'mil';

  return words;
}
