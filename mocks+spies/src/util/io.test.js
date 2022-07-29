import { it, expect, vi } from "vitest";
import writeData from './io';
import { promises as fs } from 'fs';
//
// - overrule fs implementation, this will make current test fail as the fs (invoked in io.js) wont return a promise! !!! can also affect other test modules.
vi.mock('fs');
// -overrule path implmentation
vi.mock('path', () => {
  return {
    // NOTE ESMODULE DEFAULT IMPORT
    default: {
      join: (...args) => {
        return [args.length - 1]
      }
    }
  }
});
//
//
it("should execute the writeFile method [sideffect]", () => {
  const testData = 'test';
  const testFileName = 'test.txt';

  // invoke to assert that the mock was called.
  writeData(testData, testFileName);
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalled(testFileName, testData);
  // if filepath ("../../data/ ") doesn't exist it will fail
  //we wouldn't want to actually test the implementation, in this case nodejs filesystem. as this could mean mutating raw data on the system
})
