/**
 *
 * @param {number} number
 * @returns {number}
 */

export default function createSumOfDivisibles(number) {
  if (number < 0) throw new Error("The number should be positive.");

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}
