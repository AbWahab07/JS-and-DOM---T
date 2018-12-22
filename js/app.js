const input = document.querySelector('input');
const p = document.querySelector('p.description');
const btn = document.querySelector('button.description');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
  p.textContent = `${input.value}:`;
});

ul.innerHTML = `<li>I'm from JS</li>`;
