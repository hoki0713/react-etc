export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const REMOVE_RESULT = 'REMOVE_RESULT'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = () => {
  return {
    type: ADD
  }
}

export const subtract = () => {
  return {
    type: SUBTRACT
  }
}

export const storeResult = () => {
  return {
    type: STORE_RESULT
  }
}

export const removeResult = () => {
  return {
    type: REMOVE_RESULT
  }
}