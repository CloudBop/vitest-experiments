export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // will NaN if not coercable to number
    sum += Number(number);
  }
  return sum;
}
