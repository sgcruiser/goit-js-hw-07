const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const liIngredientsArrayRef = ingredients.map((item, index) => {
  const liIngredientsRef = document.createElement('li');
  liIngredientsRef.textContent = ingredients[index];
  return liIngredientsRef;
});

ingredientsRef.append(...liIngredientsArrayRef);
