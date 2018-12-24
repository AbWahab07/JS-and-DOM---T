// 1: Set the text of the <h1> element
const h1 = document.getElementsByTagName('h1')[0];
h1.textContent = 'From JS';

// 2: Set the color of the <h1> to a different color
h1.style.color = 'seagreen';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.getElementsByClassName('desc')[0];
desc.innerHTML = 'Hi<span>there</span>';

// 4: Set the class of the <ul> to 'list'
const ul = document.getElementsByTagName('ul')[0];
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.textContent = 'Hello';
ul.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
const input = document.getElementsByTagName('input');
for (let index = 0; index < input.length; index++) {
  input[index].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const btn = document.createElement('button');
btn.textContent = 'Delete';
const extraDiv = document.querySelector('.extra');
extraDiv.appendChild(btn);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
btn.addEventListener('click', () => {
  let container = document.querySelector('.container');
  container.removeChild(extraDiv);
});