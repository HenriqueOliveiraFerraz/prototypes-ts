import '../number-prototypes/number.prototypes';

describe('numberToWord', () => {
  test('numberToWord', () => {
    const zero = 0;
    expect(zero.numberToWord()).toEqual('zero');

    const thousand = 1000;
    expect(thousand.numberToWord()).toEqual('mil');

    console.log('10'.charCodeAt(0));
    console.log('10'.charCodeAt(1));
  });
});
