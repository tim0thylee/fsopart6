import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'
//In the tests, make sure that the reducer is an immutable function with the deep-freeze-library. 
//Ensure that the provided first test passes, because Redux expects that the reducer returns a sensible 
//original state when it is called so that the first parameter state, which represents the previous state, is undefined.
//Start by expanding the reducer so that both tests pass. Then add the rest of the tests, and finally the functionality which they are testing.

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})