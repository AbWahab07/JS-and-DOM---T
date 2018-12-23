const toggleList = document.querySelector('.toggleList');
const listDiv = document.querySelector('.listDiv');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const btn = document.querySelector('button.description');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  } 
});

btn.addEventListener('click', () => {
  p.textContent = `${input.value}:`;
});
