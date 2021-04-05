import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token',
      userId: 'some-user-id' 
    })).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('should remove the token and userId', () => {
    expect(reducer({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_LOGOUT,
      idToken: null,
      userId: null
    })).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('should change authRedirectPath to checkout', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: '/checkout'
    })).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/checkout'
    })
  })

  it('login failed. will return error', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_FAIL,
      error: 'some-error'
    })).toEqual({
      token: null,
      userId: null,
      error: 'some-error',
      loading: false,
      authRedirectPath: '/'
    })
  })

  it('login process start. loading will be true', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_START
    })).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true,
      authRedirectPath: '/'
    })
  })
})