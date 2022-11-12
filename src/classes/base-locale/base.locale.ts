export class BaseLocale {
  constructor(numbersWords: string[], auxiliary: string, hundredAuxiliary: string, notFoundMessage: string) {
    this.numbersWords = numbersWords;
    this.auxiliary = auxiliary;
    this.hundredAuxiliary = hundredAuxiliary;
    this.notFoundMessage = notFoundMessage;
  }

  numbersWords: string[];
  auxiliary: string;
  hundredAuxiliary: string;
  notFoundMessage: string;
}
