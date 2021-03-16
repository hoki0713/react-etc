import * as actionTypes from './actionTypes'


export const saveResult = (res) => {
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