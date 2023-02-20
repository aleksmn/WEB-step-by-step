const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

// console.log(menu, close, nav)

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})


close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})