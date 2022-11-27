export class BaseLocale {
  constructor(numbersWords: string[], andMessage: string, hundredAuxiliary: string, thousandAuxiliary: string) {
    this.numbersWords = numbersWords;
    this.andMessage = andMessage;
    this.hundredAuxiliary = hundredAuxiliary;
    this.thousandAuxiliary = thousandAuxiliary;
  }

  numbersWords: string[];
  andMessage: string;
  hundredAuxiliary: string;
  thousandAuxiliary: string;
}
