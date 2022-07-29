import {
  describe, it, expect,
  // similar in jest
  vi
} from "vitest";
import { generateReportData } from "./data";


describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    // create spy -> don't need to invoke/test the actual console.log()->[sideeffect]
    const logger = vi.fn(
      // can mock logic with callback
      //()=>{}
    );
    //
    generateReportData(logger)
    // has our spy been called.
    expect(logger).toBeCalled();
  })
})