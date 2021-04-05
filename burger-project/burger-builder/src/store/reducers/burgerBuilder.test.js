import reducer from './burgerBuilder'
import * as actionTypes from '../actions/actionTypes'

jest.mock('axios')

describe('burger reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
	    totalPrice: 4,
	    error: false,
	    building: false,
    })
  })

  it('should handle SET_INGREDIENTS', () => {
    expect(reducer({
      ingredients: null,
	    totalPrice: 4,
	    error: false,
	    building: false,
    }, {
      type: actionTypes.SET_INGREDIENTS,
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
		  error: false,
		  building: false
    })
  })

  it('should handle ADD_INGREDIENT', () => {
    expect(reducer({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
		  error: false,
		  building: false
    }, {
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: 'bacon'
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 1,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4.7,
		  error: false,
		  building: true
    })
  })

  it('should handle REMOVE_INGREDIENT', () => {
    expect(reducer({
      ingredients: {
        salad: 0,
        bacon: 1,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4.7,
		  error: false,
		  building: true
    }, {
      type: actionTypes.REMOVE_INGREDIENT,
      ingredientName: 'bacon'
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
		  error: false,
		  building: true
    })
  })

  it('should handle FETCH_INGREDIENTS_FAILED', () => {
    expect(reducer({
      ingredients: null,
	    totalPrice: 4,
	    error: false,
	    building: false,
    }, {
      type: actionTypes.FETCH_INGREDIENTS_FAILED,
    })).toEqual({
      ingredients: null,
	    totalPrice: 4,
	    error: true,
	    building: false,
    })
  })

})