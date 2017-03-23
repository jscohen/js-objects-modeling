'use strict'

const ingredients = ['Ground Beef', 'Soy Sauce', 'Fish Sauce', 'Peppers', 'Rice']
const measure = ['Pounds', 'Tablespoons', 'Tablespoons', 'Pieces', 'Cups']
const quantity = [1, 3, 3, 6, 1]
const notes = ['Cook first', 'Use sparingly', 'Use sparingly', 'Good for you', 'Heavy']
const ingredientQuantityList = []

const IngredientQuantities = function (ingredient, measure, quantity, notes) {
  this.ingredient = ingredient
  this.unitOfMeasure = measure
  this.quantity = quantity
  this.notes = notes
}

const addIngQuantities = function (ingredient, measure, quantity, notes) {
  const newIngQuantities = new IngredientQuantities(ingredient, measure, quantity, notes)
  return newIngQuantities
}

for (let i = 0; i < ingredients.length; i++) {
  ingredientQuantityList[i] = addIngQuantities(ingredients[i], measure[i], quantity[i], notes[i])
}

const Ingredient = function (name, inFridge) {
  this.name = name
  this.inFridge = inFridge
}

const addIngredient = function (name, inFridge) {
  const newIngredient = new Ingredient(name, inFridge)
  return newIngredient
}

const ingredientList = []

for (let i = 0; i < ingredients.length; i++) {
  ingredientList[i] = addIngredient(ingredients[i], true)
}

const recipe = {
  name: 'Ka Prao',
  author: 'Jon Cohen',
  steps: ['Put in oil', 'Add soy sauce', 'Add Ground Beef', 'Add veggies', 'Stir fry'],
  ingredients: ingredientList,
  ingredientQuantities: ingredientQuantityList,
  servings: 4,
  printIngredients: function () {
    for (let i = 0; i < this.ingredientQuantities.length; i++) {
      console.log(this.ingredientQuantities[i]['quantity'] + ' ' + this.ingredientQuantities[i]['unitOfMeasure'] + ' of ' +
      this.ingredientQuantities[i]['ingredient'])
    }
  },
  needMore: function () {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i]['inFridge'] === false) {
        console.log('You still need ' + this.ingredients[i]['name'])
        break
      }
    }
    console.log("You're good to go!")
  }
}

recipe.printIngredients()
recipe.needMore()
