import { numbersWordsPtBr } from '../constants/numbers.words';

export function numbersWords(locale: string): string[] {
  switch (locale) {
    case 'pt-BR':
      return numbersWordsPtBr;
    default:
      return numbersWordsPtBr;
  }
}
