import React, { useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import ErrorModal from '../UI/ErrorModal'
import Search from './Search'

const Ingredients = (props) => {
  const [ userIngredients, setUserIngredients ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState()

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients)
  }, [userIngredients])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients)
  }, [])

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true)
    fetch('https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      setIsLoading(false)
      return response.json()
    }).then(responseData => {
      setUserIngredients(prevIngredients => (
        [...prevIngredients, 
          {
            id : responseData.name, 
            ...ingredient
          }
        ])
      )
    })
  }

  const removeIngredientHandler = (igId) => {
    setIsLoading(true)
    fetch(`https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients/${igId}.json`,{
      method: 'DELETE'
    }).then(response => {
      setIsLoading(false)
      setUserIngredients(prevIngs => prevIngs.filter(ig => ig.id !== igId))
    }).catch(error => {
      setError('Something went wrong!/n', error.message)
    })
  }

  const clearError = () => {
    setError(null)
    setIsLoading(false)
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  )
}

export default Ingredients