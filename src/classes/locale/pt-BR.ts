import { BaseLocale } from '../base-locale/base.locale';

export class PtBr extends BaseLocale {
  constructor() {
    super(generateNumbersWordsPtBr(), 'e', 'cento', 'não encontrado');
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
