import { useReducer, useCallback } from 'react'

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return { ...curHttpState, error: null }
    case 'SEND_REQUEST':
      return { loading: true, error: null, data: null }
    case 'RESPONSE':
      return { ...curHttpState, loading: false, data: action.responseData }
    case 'ERROR':
      return { loading: false, error: action.errorData }
    default:
      throw new Error('Should not be reached!')
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false, 
    error: null,
    data: null
  })

  const sendRequest = useCallback((url, method, body) => {
    dispatchHttp({ type: 'SEND_REQUEST' })
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
      dispatchHttp({ type: 'RESPONSE', data: responseData})
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorData: error.message })
    })
  }, [])
  
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest
  }
}

export default useHttp