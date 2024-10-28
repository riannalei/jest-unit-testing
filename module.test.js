import mut from './module.js';

// Test case for sum()
test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

// Test case for div()
test('Testing div -- basic case', () => {
  const expected = 2;
  const got = mut.div(4, 2);
  expect(got).toBe(expected);
});

// Test case for containsNumbers()
test('Testing containsNumbers -- contains a number', () => {
  const text = 'abc123';
  const got = mut.containsNumbers(text);
  expect(got).toBe(true);
});
