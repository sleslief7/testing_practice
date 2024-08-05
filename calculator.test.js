const calculator = require('./calculator.js');

test('add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('divide two numbers', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
