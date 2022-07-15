// can be included in 'test' command script in package.json
import { expect, it } from 'vitest'
//
import { transformToNumber } from './numbers'
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