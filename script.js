const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total =  items.length
let timer;


function update(direction){
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if(direction > 0){
        active = active + 1

        if(active === total){
            active = 0
        }
    } 
    
    else if(direction < 0){
        active = active - 1

        if(active < 0){
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2,'0')
}
clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000);

prevButton.addEventListener('click', function(){
    update(-1)
}) 

nextButton.addEventListener('click', function(){
    update(1)
})

/* HAMBURGER MENU */
const hamburger = document.getElementById('hamburger')
const navMobile = document.getElementById('nav-mobile')
const navMobileLinks = navMobile.querySelectorAll('a')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    navMobile.classList.toggle('active')
})

// Fechar menu ao clicar em um link
navMobileLinks.forEach(link => {
    link.addEventListener('click', function(){
        hamburger.classList.remove('active')
        navMobile.classList.remove('active')
    })
})

// Fechar menu ao clicar fora dele
document.addEventListener('click', function(event){
    const isClickInsideMenu = navMobile.contains(event.target)
    const isClickOnHamburger = hamburger.contains(event.target)
    
    if(!isClickInsideMenu && !isClickOnHamburger && navMobile.classList.contains('active')){
        hamburger.classList.remove('active')
        navMobile.classList.remove('active')
    }
}) 



