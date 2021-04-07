import { put } from 'redux-saga/effects'
import axios from '../../axios-order'

import * as actions from '../actions/index'

export function* initIngredientsSaga(action) {
  const response = yield axios.get(`https://react-burger-builder-ser-218d2-default-rtdb.firebaseio.com/ingredients.json`)
  try{
    yield put(actions.setIngredients(response.data))
  } catch(error) {
    yield put(actions.fetchIngredientsFailed())
  }
}