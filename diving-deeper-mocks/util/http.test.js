import { describe, it, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';
// import { HttpError, ValidationError } from "./errors"

const testResponseData = { testKey: "testData" }
// spy/track 
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string')
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData)
        })
      }
    }
    resolve(testResponse)
  })
});
// 
// overrule vitest global 'fetch()'
vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {
  const testData = { key: 'test' }

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
})
it('should convert data to JSON before sending request', async () => {
  const testData = { key: 'test' }
  let errorMsg;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMsg = error
  }
  expect(errorMsg).not.toBe('Not a string')
})

