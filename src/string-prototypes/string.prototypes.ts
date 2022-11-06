declare global {
  interface String {
    padZero(length: number): string;
  }
}

String.prototype.padZero = function (length: number): string {
  let d = String(this);
  while (d.length < length) {
    d = '0' + d;
  }
  return d;
};

export {};
