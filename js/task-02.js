const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')


const arrayOfElement = []

for (const ingredient of ingredients) {
const item = document.createElement('li')  
  item.textContent = ingredient
  item.classList.add('item')
  arrayOfElement.push(item)
}


ingredientsList.append(...arrayOfElement)
