import React, { useReducer, useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import ErrorModal from '../UI/ErrorModal'
import Search from './Search'

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type) {
    case 'SET':
      return action.ingredients
    case 'ADD':
      return [ ...currentIngredients, action.ingredient ]
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id)
    default:
      throw new Error('Should not get there!')
  }
}

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return { ...curHttpState, error: null }
    case 'SEND_REQUEST':
      return { loading: true, error: null }
    case 'RESPONSE':
      return { ...curHttpState, loading: false }
    case 'ERROR':
      return { loading: false, error: action.errorData }
    default:
      throw new Error('Should not be reached!')
  }
}

const Ingredients = (props) => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null})
  // const [ userIngredients, setUserIngredients ] = useState([])
  // const [ isLoading, setIsLoading ] = useState(false)
  // const [ error, setError ] = useState()

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients)
  }, [userIngredients])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients)
    dispatch({ type: 'SET', ingredients: filteredIngredients })
  }, [])

  const addIngredientHandler = (ingredient) => {
    dispatchHttp({ type: 'SEND_REQUEST' })
    fetch('https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      dispatchHttp({ type: 'RESPONSE' })
      return response.json()
    }).then(responseData => {
      // setUserIngredients(prevIngredients => (
      //   [...prevIngredients, 
      //     {
      //       id : responseData.name, 
      //       ...ingredient
      //     }
      //   ])
      // )
      dispatch({ type: 'ADD', ingredient: {
        id: responseData.name,
        ...ingredient
      }})
    })
  }

  const removeIngredientHandler = (igId) => {
    dispatchHttp({ type: 'SEND_REQUEST' })
    fetch(`https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients/${igId}.json`,{
      method: 'DELETE'
    }).then(response => {
      dispatchHttp({ type: 'RESPONSE' })
      // setUserIngredients(prevIngs => prevIngs.filter(ig => ig.id !== igId))
      dispatch({ type: 'DELETE', id: igId })
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorData: error.message })
    })
  }

  const clearError = () => {
    dispatchHttp({ type: 'CLEAR' })
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  )
}

export default Ingredients