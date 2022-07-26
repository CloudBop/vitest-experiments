import { expect } from "chai";
import { it } from "vitest"
import { generateToken } from "./async-example"

it("should (with correct input) generate a token value", (

) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined();

    // this passes, but it should fail...
    expect(token).toBe(2);
  })
})