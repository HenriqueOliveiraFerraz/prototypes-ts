declare global {
  interface Number {
    numberToWord(): string;
  }
}

Number.prototype.numberToWord = function (): string {
  const d = Number(this);
  console.log(d);
  return 'oi';
};

export {};
