// can be included in 'test' command script in package.json
import { describe, expect, it } from 'vitest'
//
import { cleanNumbers, transformToNumber } from './numbers'

describe(" transformToNumber()", () => {
  it('should coerce/cast typeof string to a number', () => {
    //arrange
    const a = "1"
    const expectedResult = +a
    //act
    const r = transformToNumber(a);
    //assert
    expect(r).toEqual(expectedResult);
    expect(r).toBeTypeOf("number");
  })

  it('should NaN a value that cannot be coerced to a number', () => {
    //arrange
    const a = "1siuidubiodubd"
    //act
    const r = transformToNumber(a);
    //assert
    expect(r).toBeNaN();
  })
})


describe('cleanNumbers() - integration test as it invokes other bits of code that have UT ', () => {

  it('should clean to number', () => {

    const values = ["1", "2"]

    const cleanedNumbers = cleanNumbers(values);

    expect(cleanedNumbers[0]).toBeTypeOf('number')
  })
  it('should throw error if falsy or invalid value included in array ', () => {

    const values = [, "1", "2"]

    //testing for error
    const cleanedNumbers = () => cleanNumbers(values);
    expect(cleanedNumbers).toThrow()
  })
})