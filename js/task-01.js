const categories = document.querySelector('#categories')
const arrayCategories = categories.querySelectorAll('.item')
console.log(`Number of categories: ${arrayCategories.length}`)

for (const item of arrayCategories) {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`) 
}
