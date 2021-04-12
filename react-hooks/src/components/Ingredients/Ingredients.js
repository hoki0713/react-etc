import React, { useState } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import Search from './Search'

const Ingredients = (props) => {
  const [ userIngredients, setUserIngredients ] = useState([])

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
    setUserIngredients(prevIngs => prevIngs.filter(ig => ig.id !== igId))
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  )
}

export default Ingredients