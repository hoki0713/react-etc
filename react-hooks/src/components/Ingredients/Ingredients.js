import React, { useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import Search from './Search'

const Ingredients = (props) => {
  const [ userIngredients, setUserIngredients ] = useState([])

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients)
  }, [userIngredients])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients)
  }, [])

  const addIngredientHandler = (ingredient) => {
    fetch('https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
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
    fetch(`https://react-hooks-update-3b865-default-rtdb.firebaseio.com/ingredients/${igId}.json`,{
      method: 'DELETE'
    }).then(response => {
      setUserIngredients(prevIngs => prevIngs.filter(ig => ig.id !== igId))
    })
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  )
}

export default Ingredients