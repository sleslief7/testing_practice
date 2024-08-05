const reverseString = require('./reverseString.js');

test('reverse one word', () => {
  expect(reverseString('leslie')).toBe('eilsel');
});
