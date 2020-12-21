const fontSizeControlRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

// console.dir(fontSizeControlRef);
// console.dir(textSpanRef);

fontSizeControlRef.addEventListener('input', event => {
  textSpanRef.style.fontSize = `${fontSizeControlRef.valueAsNumber}px`;
});
