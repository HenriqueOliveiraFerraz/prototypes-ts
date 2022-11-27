declare global {
  interface String {
    /**
     * @returns True if the string has only letters, false otherwise
     */
    hasOnlyLetters(): boolean;
    /**
     * @returns Capitalize the first letter of a word and returns it
     */
    capitalizeFirstLetter(): string;
  }
}

String.prototype.hasOnlyLetters = function (): boolean {
  const str = String(this);
  return /^[a-zA-Z]+$/.test(str);
};

String.prototype.capitalizeFirstLetter = function (): string {
  const str = String(this);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export {};
