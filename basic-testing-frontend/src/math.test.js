// can be included in 'test' command script in package.json
import { expect, it } from 'vitest'
//
import { add } from './basic-testing-frontend/src/math'
it('should summarise numbers values of array together', () => {

  const r = add([1, 2, 3])
  expect(r).toEqual(6)

})


