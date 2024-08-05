const calculator = require('./calculator.js');

test('add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
