const capitalize = require('./capitalize');

test('Capitalize one word', () => {
  expect(capitalize('leslie')).toBe('Leslie');
});

test('Capitalize a sentence', () => {
  expect(capitalize('leslie es linda')).toBe('Leslie es linda');
});

test('Capitalize with spaces in the front of str', () => {
  expect(capitalize('        leslie es linda')).toBe('Leslie es linda');
});

test('Capitalize with spaces at the end of str', () => {
  expect(capitalize('leslie es linda         ')).toBe('Leslie es linda');
});

test('Capitalize with spaces at the beginning and end of str', () => {
  expect(capitalize('     leslie es linda    ')).toBe('Leslie es linda');
});
