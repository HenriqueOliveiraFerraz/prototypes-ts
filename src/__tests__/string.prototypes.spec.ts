import '../string-prototypes/string.prototypes';

describe('hasOnlyLetters', () => {
  test('hasOnlyLetters', () => {
    expect('Carl'.hasOnlyLetters()).toEqual(true);
    expect('C234arl'.hasOnlyLetters()).toEqual(false);
    expect('Ca  rl'.hasOnlyLetters()).toEqual(false);
    expect('Ca,rl'.hasOnlyLetters()).toEqual(false);
    expect('Ca/rl'.hasOnlyLetters()).toEqual(false);
  });
});

describe('capitalizeFirstLetter', () => {
  test('capitalizeFirstLetter', () => {
    expect('Carl'.capitalizeFirstLetter()).toEqual('Carl');
    expect('carl'.capitalizeFirstLetter()).toEqual('Carl');
  });
});
