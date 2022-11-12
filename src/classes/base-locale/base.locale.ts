export class BaseLocale {
  constructor(numbersWords: string[], auxiliary: string, hundredAuxiliary: string) {
    this.numbersWords = numbersWords;
    this.auxiliary = auxiliary;
    this.hundredAuxiliary = hundredAuxiliary;
  }

  numbersWords: string[];
  auxiliary: string;
  hundredAuxiliary: string;
}
