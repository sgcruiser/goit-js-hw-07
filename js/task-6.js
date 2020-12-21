const inputValidationRef = document.querySelector('#validation-input');

const dataLengthBasic = Number(inputValidationRef.dataset.length);
// console.dir(inputValidationRef);

function validRef(event) {
  inputValidationRef.classList.add('valid');
  inputValidationRef.classList.remove('invalid');
}

function invalidRef(event) {
  inputValidationRef.classList.add('invalid');
  inputValidationRef.classList.remove('valid');
}

inputValidationRef.addEventListener('blur', event => {
  inputValidationRef.value.length === dataLengthBasic
    ? validRef()
    : invalidRef();
  // console.dir(inputValidationRef);
});
