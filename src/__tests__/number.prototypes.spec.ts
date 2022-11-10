import '../number-prototypes/number.prototypes';

describe('numberToWord', () => {
  test('numberToWord', () => {
    const zero = 0;
    expect(zero.numberToWord()).toEqual('zero');

    const fiftyFive = 55;
    expect(fiftyFive.numberToWord()).toEqual('cinquenta e cinco');

    const thousand = 1000;
    expect(thousand.numberToWord()).toEqual('mil');
  });
});
