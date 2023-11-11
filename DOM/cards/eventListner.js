//Event Listner

//addEventListener
const button = document.querySelectorAll('button')

console.log(button);

button[0].addEventListener("click",function(){
    alert('I Love JavaScript')
})


//Mouse Over

const card = document.querySelector('ul');
const button1 = document.querySelector('#btn-3')
// console.log(button1);


button1.addEventListener('mouseover',function(){
    card.lastElementChild.firstElementChild.style.backgroundColor = "blue"
})
