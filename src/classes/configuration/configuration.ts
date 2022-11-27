import { Locale } from '../../types/locale';
import { PtBr } from '../locale/pt-BR';

export class Configuration {
  private constructor(locale: Locale) {
    this.locale = locale;
  }
  private static instance: Configuration;
  private locale: Locale;

  public static setInstance(locale: Locale): void {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration(locale);
    }
  }

  public static getInstance(): Configuration {
    return Configuration.instance;
  }

  public static createBaseLocaleExtension(): PtBr {
    switch (Configuration.getInstance().locale) {
      case 'pt-BR':
        return new PtBr();
      default:
        return new PtBr();
    }
  }
}
