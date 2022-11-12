declare global {
  interface String {
    hasOnlyLetters(): boolean;
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
