const itemRef = [...document.querySelectorAll('li.item')];
// console.log(itemRef);
console.log(`В списке ${itemRef.length} категории.`);

itemRef.map(item => {
  const tittleItemRef = item.querySelector('h2');
  const amountElementCategories = item.querySelectorAll('ul li');
  return console.log(
    `Категория: ${tittleItemRef.textContent}\r\nКоличество элементов: ${amountElementCategories.length} `,
  );
});
