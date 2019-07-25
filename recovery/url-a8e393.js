import {
  idGenerator,
  generateKeysIds,
  mapKeysRecursively,
  stateToString,
  stringToState
} from '../url'

describe('String', () => {
  describe('id generator', () => {
    const gen = idGenerator()
    const indices = [...Array(500).keys()].map(n => gen.next().value)
    console.log(indices)
    it.each(indices)(
      'should be ids starting with a letter',
      (string, expected) => {
        expect(string).toBe(expected)
      }
    )
  })
})
