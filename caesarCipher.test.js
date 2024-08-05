const caesarCipher = require('./caesarCipher.js');

test('add two numbers', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('add two numbers', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('add two numbers', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
