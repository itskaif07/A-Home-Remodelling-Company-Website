const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

let menu = document.querySelector('#menu')
let bar = document.querySelector('#bar')
let x = document.querySelector('#x')

bar.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
    x.classList.toggle('hidden')
    bar.classList.toggle('hidden')
})

x.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
    x.classList.toggle('hidden')
    bar.classList.toggle('hidden')
})