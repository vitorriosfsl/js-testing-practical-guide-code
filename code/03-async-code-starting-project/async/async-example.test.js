import { expect, it } from 'vitest';

import { generateToken } from './async-example';

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});
