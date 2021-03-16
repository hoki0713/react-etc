import * as actionTypes from './actionTypes'

/**
 * Action Creators
 *   -> Can run Asynchronous Code
 *   -> Shouldn't prepare the state update too much
 */

export const saveResult = (res) => {
  // const updatedResult = res * 2
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(res))
    }, 2000)
  }
}

export const removeResult = (id) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    resultElId: id
  }
}