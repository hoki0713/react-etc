import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

/**
 * Reducer
 *   -> Pure, Synchronous Code Only!
 *   -> Core Redux Concept: Reducers update the State
 */

const initialState = {
	results: [],
}

const deleteResult = (state, action) => {
	const updatedArr = state.results.filter((result) => result.id !== action.resultElId)
	return updateObject(state, {results: updatedArr})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			// Change Data
			return updateObject(state,{results: state.results.concat({ id: new Date(), value: action.result })})
		case actionTypes.REMOVE_RESULT:
			// const id = 2
			// const newArr = [...state.results]
			// newArr.splice(id, 1)
			return deleteResult(state, action)
		default:
			return state
	}
}

export default reducer
