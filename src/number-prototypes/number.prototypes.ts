declare global {
  interface Number {
    numberToWord(): string;
  }
}

Number.prototype.numberToWord = function (): string {
  const number = Number(this);
  const numbersWords = ['zero'];
  console.log(number);
  return 'oi';
};

export {};
