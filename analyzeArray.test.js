const analyzeArray = require('./analyzeArray.js');

test('Average of [1,8,3,4,2,6]', () => {
  expect(JSON.stringify(analyzeArray([1, 8, 3, 4, 2, 6]))).toBe(
    JSON.stringify({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  );
});
