import { cleanNumbers } from './util/numbers';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // if (typeof number !== 'number') {
    //   return NaN;
    // }

    sum += +number;
  }
  return sum;
}

export const calculateResult = (numberValues) => {
  let result = '';

  try {
    const numbers = cleanNumbers(numberValues);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
};
