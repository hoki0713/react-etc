import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as actions from './auth'
import * as actionTypes from './actionTypes'
import { FIREBASE_API_KEY } from '../../apiKey'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)
const store = mockStore()

describe('auth actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('dispatch AUTH_SUCCESS for signIn', () => {

    mock.onPost(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`)
      .reply(201, { 
        response: { 
          data: {
            idToken: 'some-idToken',
            email: 'some-email',
            refreshToken: 'some-refreshToken',
            expiresIn: 'some-expiresIn',
            localId: 'some-localId',
            registered: true
          }
        }
      })
    
    const expectedActions = [
        { type: actionTypes.AUTH_START },
        { type: actionTypes.AUTH_SUCCESS,
          idToken: 'some-idToken',
          userId: 'some-localId' },
        { type: actionTypes.AUTH_FAIL,
          error: 'some-error'
        }
      ]
        
    store.dispatch(actions.auth('some-email','some-password', true))
    store.dispatch(actions.authSuccess('some-idToken', 'some-localId'))
    store.dispatch(actions.checkAuthTimeout('some-expiresIn'))
    store.dispatch(actions.authFail('some-error'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})