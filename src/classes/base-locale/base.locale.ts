export class BaseLocale {
  constructor(
    numbersWords: string[],
    andMessage: string,
    hundredAuxiliary: string,
    thousandAuxiliary: string,
    millionsSingularAuxiliary: string,
    millionsPluralAuxiliary: string,
    billionsSingularAuxiliary: string,
    billionsPluralAuxiliary: string,
    notFoundMessage: string
  ) {
    this.numbersWords = numbersWords;
    this.andMessage = andMessage;
    this.hundredAuxiliary = hundredAuxiliary;
    this.thousandAuxiliary = thousandAuxiliary;
    this.millionsSingularAuxiliary = millionsSingularAuxiliary;
    this.millionsPluralAuxiliary = millionsPluralAuxiliary;
    this.billionsSingularAuxiliary = billionsSingularAuxiliary;
    this.billionsPluralAuxiliary = billionsPluralAuxiliary;
    this.notFoundMessage = notFoundMessage;
  }

  numbersWords: string[];
  andMessage: string;
  hundredAuxiliary: string;
  thousandAuxiliary: string;
  millionsSingularAuxiliary: string;
  millionsPluralAuxiliary: string;
  billionsSingularAuxiliary: string;
  billionsPluralAuxiliary: string;
  notFoundMessage: string;
}
