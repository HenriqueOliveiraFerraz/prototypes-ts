import { Configuration } from './classes/configuration/configuration';
import { Locale } from './types/locale';

export function prototypesConfiguration(locale: Locale): void {
  Configuration.setInstance(locale);
}
export * from './string-prototypes/string.prototypes';
export * from './number-prototypes/number.prototypes';
export * from './array-prototypes/array.prototypes';
