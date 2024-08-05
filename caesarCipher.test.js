const caesarCipher = require('./caesarCipher.js');

test('encrypt "xyz"', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('encrypt "HeLLo"', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('encrypt "Hello, World!"', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
