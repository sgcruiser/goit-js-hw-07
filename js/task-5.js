const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

const outputBasicNameRef = outputNameRef.textContent;

// console.dir(inputNameRef);
// console.dir(outputNameRef);

inputNameRef.addEventListener('input', event => {
  outputNameRef.textContent = event.target.value
    ? event.target.value
    : outputBasicNameRef;
});
