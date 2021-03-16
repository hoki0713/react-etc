import * as actionTypes from '../actions/actionTypes'

/**
 * Reducer
 *   -> Pure, Synchronous Code Only!
 *   -> Core Redux Concept: Reducers update the State
 */

const initialState = {
	results: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			// Change Data
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result }),
			}
		case actionTypes.REMOVE_RESULT:
			// const id = 2
			// const newArr = [...state.results]
			// newArr.splice(id, 1)
			const updatedArr = state.results.filter((result) => result.id !== action.resultElId)
			return {
				...state,
				results: updatedArr,
			}
		default:
			return state
	}
}

export default reducer
