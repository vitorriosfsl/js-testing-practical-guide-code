import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number to a number with type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

it('should transform a string number to a number with type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it('should yield NaN for non-transformable number', () => {
  const input = 'invalid';

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
