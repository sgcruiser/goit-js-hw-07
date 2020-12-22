const inputValidationRef = document.querySelector('#validation-input');

const dataLengthBasic = Number(inputValidationRef.dataset.length);
// console.dir(inputValidationRef);

function validRef() {
  event.target.classList.add('valid');
  event.target.classList.remove('invalid');
}

function invalidRef() {
  event.target.classList.add('invalid');
  event.target.classList.remove('valid');
}

inputValidationRef.addEventListener('blur', event => {
  event.target.value.length === dataLengthBasic ? validRef() : invalidRef();
  // console.dir(inputValidationRef);
});

/*
 * Первый вариант
 */

// function validRef(event) {
//   inputValidationRef.classList.add('valid');
//   inputValidationRef.classList.remove('invalid');
// }

// function invalidRef(event) {
//   inputValidationRef.classList.add('invalid');
//   inputValidationRef.classList.remove('valid');
// }

// inputValidationRef.addEventListener('blur', event => {
//   inputValidationRef.value.length === dataLengthBasic
//     ? validRef()
//     : invalidRef();
//   // console.dir(inputValidationRef);
// });
