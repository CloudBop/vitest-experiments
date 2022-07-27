import { it, expect } from "vitest";
import writeData from './io';
it("should execute the writeFile method [sideffect]", () => {
  const testData = 'test';
  const testFileName = 'test.txt';

  //we wouldn't want to actually test the implementation, in this case nodejs filesystem.
  // as this could mean mutating raw data on the system
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // if filepath ("../../data/ ") doesn't exist it will fail
})
