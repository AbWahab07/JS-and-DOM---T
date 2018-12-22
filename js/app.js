/****************************
 * Simple Example 
*/
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const color = document.getElementById('colorVal');
const fontSize = document.getElementById('fontSize');
const fontVal = document.getElementById('fontVal');
const reset = document.getElementById('reset');

myButton.addEventListener('click', () => {
  myHeading.style.color = color.value;
});

fontSize.addEventListener('click', () => {
  myHeading.style.fontSize = `${fontVal.value}px`;
});

reset.addEventListener('click', () => {
  myHeading.style.color = 'initial';
  myHeading.style.fontSize = 'initial';
});
