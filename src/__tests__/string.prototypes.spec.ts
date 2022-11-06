import '../string-protoypes/string.protoypes';

test('padZero', () => {
  expect('Carl'.padZero(5)).toBe('0Carl');
});
