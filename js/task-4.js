const valueRef = document.querySelector('#value');
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"] ',
);
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"] ',
);

let counterValue = 0;

incrementButtonRef.addEventListener('click', () => {
  increment();
});
decrementButtonRef.addEventListener('click', () => {
  decrement();
});

const increment = value => {
  value = ++counterValue;
  // console.log(value);
  return (valueRef.textContent = value);
};

const decrement = value => {
  value = --counterValue;
  return (valueRef.textContent = value);
};
