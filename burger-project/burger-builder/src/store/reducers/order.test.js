import reducer from './order'
import * as actionTypes from '../actions/actionTypes'

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      orders: [],
      loading: false,
      purchased: false
    })
  })

  it('should handle PURCHASE_INIT', () => {
    expect(reducer({
      orders: [],
      loading: false,
      purchased: false
    }, {
      type: actionTypes.PURCHASE_INIT
    })).toEqual({
      orders: [],
      loading: false,
      purchased: false
    })
  })

  it('should handle PURCHASE_BURGER_START', () => {
    expect(reducer({
      orders: [],
      loading: false,
      purchased: false
    }, {
      type: actionTypes.PURCHASE_BURGER_START
    })).toEqual({
      orders: [],
      loading: true,
      purchased: false
    })
  })

  it('should handle PURCHASE_BURGER_SUCCESS', () => {
    expect(reducer({
      orders: [],
      loading: true,
      purchased: false
    }, {
      type: actionTypes.PURCHASE_BURGER_SUCCESS,
      orderId: 'some-order-id',
      orderData: {
        ingredients: {},
        price: 0,
        orderData: 'some-order-data',
        userId: 'some-user-id',
        id: 'some-order-id'
      }
    })).toEqual({
      orders: [
        {
          ingredients: {},
          price: 0,
			    orderData: 'some-order-data',
			    userId: 'some-user-id',
          id: 'some-order-id'
        }
      ],
      loading: false,
      purchased: true
    })
  })

  it('should handle PURCHASE_BURGER_FAIL', () => {
    expect(reducer({
      orders: [],
      loading: true,
      purchased: false
    }, {
      type: actionTypes.PURCHASE_BURGER_FAIL,
      error: 'some-error'
    })).toEqual({
      orders: [],
      loading: false,
      purchased: false
    })
  })

  it('should handle FETCH_ORDERS_START', () => {
    expect(reducer({
      orders: [],
      loading: false,
      purchased: false
    }, {
      type: actionTypes.FETCH_ORDERS_START
    })).toEqual({
      orders: [],
      loading: true,
      purchased: false
    })
  })

  it('should handle FETCH_ORDERS_SUCCESS', () => {
    expect(reducer({
      orders: [],
      loading: true,
      purchased: false
    }, {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders: ['some-order']
    })).toEqual({
      orders: ['some-order'],
      loading: false,
      purchased: false
    })
  })

  it('should handle FETCH_ORDERS_FAIL', () => {
    expect(reducer({
      orders: [],
      loading: true,
      purchased: false
    }, {
      type: actionTypes.FETCH_ORDERS_FAIL,
      error: 'some-error'
    })).toEqual({
      orders: [],
      loading: false,
      purchased: false
    })
  })

})