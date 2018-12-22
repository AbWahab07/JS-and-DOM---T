// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById('about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const headings = document.getElementsByTagName('h2');
for (let index = 0; index < headings.length; index++) {
  headings[index].style.color = 'red'; 
}

// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const cards = document.getElementsByClassName('card');
for (let index = 0; index < cards.length; index++) {
  cards[index].style.backgroundColor = 'red';
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.querySelector('ul');
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.getElementsByClassName('container')[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
const titles = document.querySelectorAll('a[title]');
for (let index = 0; index < titles.length; index++) {
  titles[index].style.color = 'orange';
}


