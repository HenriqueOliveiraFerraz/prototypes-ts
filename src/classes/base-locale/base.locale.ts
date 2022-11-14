export class BaseLocale {
  constructor(numbersWords: string[], andMessage: string, hundredAuxiliary: string, notFoundMessage: string) {
    this.numbersWords = numbersWords;
    this.andMessage = andMessage;
    this.hundredAuxiliary = hundredAuxiliary;
    this.notFoundMessage = notFoundMessage;
  }

  numbersWords: string[];
  andMessage: string;
  hundredAuxiliary: string;
  notFoundMessage: string;
}
