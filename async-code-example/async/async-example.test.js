import { expect } from "chai";
import { it } from "vitest"
import { generateToken, generateTokenPromise } from "./async-example"

it("should callback (with correct input) generate a token value - testing callback fn", (
  // fn to invoke after async logic - jest too 
  done
) => {
  const testUserEmail = "test@test.com";
  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined();
    try {
      // this passes, but it should fail...
      expect(token).toBe(2);
      done()
    } catch (error) {
      // wait for async before timeout
      done()
    }
  })
})

it("should return Promise (with correct input) generate a token value - testing Promise", (
  // fn to invoke after async logic - jest too 
  // not needed in this statement
  // done
) => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
  /** why return?
   * This guarantees that Vitest / Jest wait for the promise to be resolved.
   * You don't need to return when using async / await (since a function annotated with async returns a promise implicitly).
   */
})

it("should return Promise (with correct input) generate a token value - testing Promise", async (
  // fn to invoke after async logic - jest too 
  // not needed in this statement
  // done
) => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail)
  // expect(token).toBe(2) - > will catch this error, unlike callback
  expect(token).toBeDefined()
})