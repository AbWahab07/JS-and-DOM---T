const myList = document.getElementsByTagName('li');
// accessing all the individual items from the collection myList
for (let index = 0; index < myList.length; index++) {
  myList[index].style.color = 'red';
}

const specialItems = document.getElementsByClassName('special');
// accessing all the individual items from the collection myList
for (let index = 0; index < specialItems.length; index++) {
  specialItems[index].style.color = 'purple';
}
