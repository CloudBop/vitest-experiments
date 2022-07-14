// can be included in 'test' command script in package.json
import { expect, it } from 'vitest'
//
import { add } from './math'
it('should summarise numbers values of array together', () => {
  //arrange
  const a = [1, 2];
  const expectedResult = a.reduce(
    (prevVal, curValue) => prevVal + curValue,
    // startValue
    0
  )
  //act
  const r = add(a);
  //assert
  expect(r).toEqual(expectedResult);

})
it('should yield NaN if an invalid value is in data', () => {
  //arrange
  const a = [1, 'invalid'];
  //act
  const r = add(a);
  //assert
  expect(r).toBeNaN();
})
it('should yield result if value is coercible string eg:"1" ', () => {
  //arrange
  const a = ["1", '2']
  const expectedResult = a.reduce(
    (prevVal, curValue) => Number(prevVal) + Number(curValue),
    // startValue
    0
  )
  //act
  const r = add(a)
  //assert
  expect(r).toEqual(expectedResult)
})
it('should yield 0 if array is number ', () => {
  //arrange
  const a = []
  const expectedResult = a.reduce(
    (prevVal, curValue) => Number(prevVal) + Number(curValue),
    // startValue
    0
  )
  //act
  const r = add(a)
  //assert
  expect(r).toEqual(expectedResult)
})
it('should yield error if fn called with no args ', () => {
  //
  // as opposed to asseting on a trycatch
  //
  // use expect as closure

  //arrange
  const resultFn = () => {
    add()
  }
  //act
  //assert
  expect(resultFn).toThrow()
})
it('should yield error if fn called with more than 1 args ', () => {
  //arrange
  let num1 = 1, num2 = 2
  const resultFn = () => {
    // will error as fn cannot loop over number type
    add(num1, num2)
  }
  //act
  //assert error contains regex
  expect(resultFn).toThrow(/is not iterable/)
})

