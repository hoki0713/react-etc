import React, { useState } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import Search from './Search'

const Ingredients = (props) => {
  const [ userIngredients, setUserIngredients ] = useState([])

  const addIngredientHandler = (ingredient) => {
    setUserIngredients(prevIngredients => (
      [...prevIngredients, 
        {
          id : Math.random().toString(), 
          ...ingredient
        }
      ]))
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