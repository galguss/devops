const { sum, subtract, isEven } = require('../math');

test('sum 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('subtract 10 - 4 = 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('isEven(4) should be true', () => {
  expect(isEven(4)).toBe(true);
});

test('isEven(5) should be false', () => {
  expect(isEven(5)).toBe(false);
});

