import { it, expect } from "vitest";

import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = ' ';

  // test for the error
  const validationFn = () => validateNotEmpty(testInput)

  expect(validationFn).toThrow();
})


it('should throw an error if a string or spaces provided as a value', () => {
  const testInput = ' ';

  // test for the error
  const validationFn = () => validateNotEmpty(testInput)

  expect(validationFn).toThrow();
})


it('should throw an error with provided error', () => {
  const testInput = ' ';
  const testErrorMessage = "Test"

  // test for the error
  const validationFn = () => validateNotEmpty(testInput, testErrorMessage)

  expect(validationFn).toThrow(testErrorMessage);
})