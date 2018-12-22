const input = document.querySelector('input');
const p = document.querySelector('p.description');
const span = document.querySelector('span');

// Dynamically updating input type 
input.type = 'checkbox';

// Dynamically setting the content of span
span.innerHTML = `<code>${p.className}</code>`;

// Dynamically adding the title to p
p.title = 'Description of the list';
