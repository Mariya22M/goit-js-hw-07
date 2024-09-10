
const categoriesEl = document.querySelectorAll('#categories .item');


console.log(`В списку ${categoriesEl.length} категорії.`);


categoriesEl.forEach(category => {
  const titleEl = category.querySelector('h2'); 
  const itemsEl = category.querySelectorAll('ul li'); 
  console.log(`Категорія: ${titleEl.textContent}, кількість елементів: ${itemsEl.length}`);
});
