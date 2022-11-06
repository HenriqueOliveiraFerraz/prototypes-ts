import '../string-prototypes/string.prototypes';

test('padZero', () => {
  expect('Carl'.padZero(5)).toBe('0Carl');
});
