import { describe, it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
// import { HttpError, ValidationError } from "./errors"

const testResponseData = { testKey: "testData" }
// spy/track 
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
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