//GetElementById()

const title = document.getElementById('main-heading');
console.log(title);
console.log(title.innerText);

//GetElementByClassName()
const listItem = document.getElementsByClassName('list-items')
console.log(listItem);

//GetElementByTagName()
const listItems = document.getElementsByTagName('li')
console.log(listItems);
console.log(listItems[1].innerText);

//querySelector()

const container = document.querySelector('div')
const containe = document.querySelector('.child_div')
console.log(container);
console.log(containe);

//querySelectorAll()
const all = document.querySelectorAll("div")
console.log(all);


//Creating Element

const ul = document.querySelector('ul')
const li = document.createElement('li')

//Adding Element
// ul.append(li)
ul.append(li.innerText = "Black Adam")

//Modifying Element

listItems[0].innerHTML = "Hero No.1"

//Modifying Attribute , Id , Class

title.setAttribute('class' , "Heading");
title.setAttribute('name' , 'main')

//removing Attribute
title.removeAttribute('name')

// li.classList.add('list-items')