import '../string-prototypes/string.prototypes';

describe('padZero', () => {
  test('padZero', () => {
    expect('Carl'.padZero(5)).toBe('0Carl');
  });
});
