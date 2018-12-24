const toggleList = document.querySelector('.toggleList');
const listDiv = document.querySelector('.listDiv');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');
const listInput = document.querySelector('.listInput');
const listItems = document.querySelector('.listItems');
const listAdd = document.querySelector('.listAdd');
const removeItem = document.querySelector('.removeItem');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  } 
});

descriptionBtn.addEventListener('click', () => {
  descriptionP.textContent = `${descriptionInput.value}:`;
  descriptionInput.value = '';
});

listAdd.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = listInput.value;
  listItems.appendChild(li);
  listInput.value = '';
});

removeItem.addEventListener('click', () => {
  let li = document.querySelector('li:last-child');
  listItems.removeChild(li);
});