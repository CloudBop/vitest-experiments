import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from "./errors"
describe('class HttpError', () => {

  it('should contain the provided status code, message and data', () => {
    const testStatus = 1;
    const testMessage = 'Test'
    const testData = { "key": 'test' };

    const testError = new HttpError(testStatus, testMessage, testData)

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  })
  it('should contain undefined if no data is provided', () => {
    // const testData = { key: 'test' };
    const testStatus = 1;
    const testMessage = 'Test'

    const testError = new HttpError(testStatus, testMessage)

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  })

  describe('class validationError', () => {
    it('should contain the provided message', () => {

      const testMessage = 'test'

      const testError = new ValidationError(testMessage);

      expect(testError.message).toBe(testMessage);
    })
  })


})