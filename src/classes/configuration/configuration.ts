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
      Configuration.setBaseLocaleExtension(locale);
    }
  }

  public static getInstance(): Configuration {
    return Configuration.instance;
  }

  private static setBaseLocaleExtension(locale: Locale): void {
    switch (locale) {
      case 'pt-BR':
        PtBr.setInstance();
        break;
      default:
        PtBr.setInstance();
        break;
    }
  }

  public static getBaseLocaleExtension(): PtBr {
    switch (Configuration.getInstance().locale) {
      case 'pt-BR':
        return PtBr.getInstance();
      default:
        return PtBr.getInstance();
    }
  }
}
