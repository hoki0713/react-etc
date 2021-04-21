import { useReducer, useCallback } from 'react'

const initialState = {
  loading: false, 
  error: null,
  data: null,
  extra: null,
  identifier: null
}

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState
    case 'SEND_REQUEST':
      return { loading: true, error: null, data: null, extra: null, identifier: action.identifier }
    case 'RESPONSE':
      return { ...curHttpState, loading: false, data: action.data, extra: action.extra }
    case 'ERROR':
      return { loading: false, error: action.errorData }
    default:
      throw new Error('Should not be reached!')
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState)

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), [])

  const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
    dispatchHttp({ type: 'SEND_REQUEST', identifier: reqIdentifier })
    fetch(
      url,
      {
        method: method,
        body: body,
        header: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      return response.json()
    }).then(responseData => {
      dispatchHttp({ 
        type: 'RESPONSE', 
        data: responseData,
        extra: reqExtra
      })
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorData: error.message })
    })
  }, [])
  
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear
  }
}

export default useHttp