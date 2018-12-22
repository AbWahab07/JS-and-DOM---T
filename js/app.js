const myList = document.getElementsByTagName('li');
for (let index = 0; index < myList.length; index++) {
  myList[index].style.color = 'red';
}

// accessing the first h1 from the returned HTML collection
const myHeading = document.getElementsByTagName('h1')[0];
myHeading.style.color = 'orange';
