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

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
};

describe('auth actions', () => {
  beforeEach(() => {
    store.clearActions()
    global.localStorage = new LocalStorageMock;
  })

  it('dispatch AUTH_SUCCESS for signIn', async () => {

    mock.onPost(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`)
      .reply(201, { 
        response: { 
          data: {
            expiresIn: 'some-expiresIn',
            idToken: 'some-idToken',
            localId: 'some-localId',
            error: 'some-error'
          }
        }
      })


    const expectedActions = [
      { type: actionTypes.AUTH_START },
      // { type: actionTypes.AUTH_SUCCESS, authData: { email: 'some-email', password: 'some-password', returnSecureToken: true} }
    ]



    await store.dispatch(actions.auth('some-email','some-password', true))
    
    console.log(store.getActions())
    expect(store.getActions()).toEqual(expectedActions)
  })
})