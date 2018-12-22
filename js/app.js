const myList = document.getElementsByTagName('li');
// accessing all the individual items from the collection myList
for (let index = 0; index < myList.length; index++) {
  myList[index].style.color = 'red';
}

const specialItems = document.querySelectorAll('.special');
// accessing all the individual items from the collection myList
for (let index = 0; index < specialItems.length; index++) {
  specialItems[index].style.color = 'purple';
}

const updateBackground = document.querySelectorAll('li:nth-child(odd)');
for (let index = 0; index < updateBackground.length; index++) {
  updateBackground[index].style.backgroundColor = 'gray';
}