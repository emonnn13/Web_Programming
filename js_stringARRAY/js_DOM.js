let elm = document.querySelector('.box .item');
elm.style.color = 'blue';
elm.style.backgroundColor = 'red';
elm.classList.add('hightlight')
   console.log(elm.innerHTML);
   elm.innerHTML = "This is box 1"

//select multiple object inside a class
let items = document.querySelectorAll('.box .item');
all the items become array like innerHTML elements.
   items[2].innerHTML = "This is NEW BOX"

//sibling element
 elm.nextElementSibling.classList.add('highlight'); //colors the 2nd box
elm.parentElement.nextElementSibling.firstElementChild.classList.add('highlight'); //colors the parent box
elm.parentElement.nextElementSibling.querySelector('.item.five').classList.add('highlight'); //colors the parent box

