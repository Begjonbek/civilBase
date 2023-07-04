const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}


let age = document.querySelector('#item')
let age2 = document.querySelector('#item2')
let age3 = document.querySelector('#item3')
let age4 = document.querySelector('#item4')
let age5 = document.querySelector('#item5')
let text = document.querySelector('#text')
let text2 = document.querySelector('#text2')
let text3 = document.querySelector('#text3')
let text4 = document.querySelector('#text4')
let text5 = document.querySelector('#text5')

age.style.backgroundColor = '#F0F4F6'
age.style.borderRadius = '8px'
text.style.color = 'black'

age.addEventListener('click', function() {
    age.style.backgroundColor = '#F0F4F6'
    age.style.borderRadius = '8px'
    text.style.color = 'black'

    age2.style.backgroundColor = 'white'
    age2.style.borderRadius = '8px'
    text2.style.color = '#4B5563'

    age3.style.backgroundColor = 'white'
    age3.style.borderRadius = '8px'
    text3.style.color = '#4B5563'

    age4.style.backgroundColor = 'white'
    age4.style.borderRadius = '8px'
    text4.style.color = '#4B5563'

    age5.style.backgroundColor = 'white'
    age5.style.borderRadius = '8px'
    text5.style.color = '#4B5563'
    
})
age2.addEventListener('click', function() {
    age2.style.backgroundColor = '#F0F4F6'
    age2.style.borderRadius = '8px'
    text2.style.color = 'black'
    
    age.style.backgroundColor = 'white'
    age.style.borderRadius = '8px'
    text.style.color = '#4B5563'

    age3.style.backgroundColor = 'white'
    age3.style.borderRadius = '8px'
    text3.style.color = '#4B5563'

    age4.style.backgroundColor = 'white'
    age4.style.borderRadius = '8px'
    text4.style.color = '#4B5563'

    age5.style.backgroundColor = 'white'
    age5.style.borderRadius = '8px'
    text5.style.color = '#4B5563'
})
age3.addEventListener('click', function() {
    age3.style.backgroundColor = '#F0F4F6'
    age3.style.borderRadius = '8px'
    text3.style.color = 'black'

    
    age2.style.backgroundColor = 'white'
    age2.style.borderRadius = '8px'
    text2.style.color = '#4B5563'

    age.style.backgroundColor = 'white'
    age.style.borderRadius = '8px'
    text.style.color = '#4B5563'

    age4.style.backgroundColor = 'white'
    age4.style.borderRadius = '8px'
    text4.style.color = '#4B5563'

    age5.style.backgroundColor = 'white'
    age5.style.borderRadius = '8px'
    text5.style.color = '#4B5563'
})
age4.addEventListener('click', function() {
    age4.style.backgroundColor = '#F0F4F6'
    age4.style.borderRadius = '8px'
    text4.style.color = 'black'
    
    age2.style.backgroundColor = 'white'
    age2.style.borderRadius = '8px'
    text2.style.color = '#4B5563'

    age3.style.backgroundColor = 'white'
    age3.style.borderRadius = '8px'
    text3.style.color = '#4B5563'

    age.style.backgroundColor = 'white'
    age.style.borderRadius = '8px'
    text.style.color = '#4B5563'

    age5.style.backgroundColor = 'white'
    age5.style.borderRadius = '8px'
    text5.style.color = '#4B5563'
})
age5.addEventListener('click', function() {
    age5.style.backgroundColor = '#F0F4F6'
    age5.style.borderRadius = '8px'
    text5.style.color = 'black'
    
    age2.style.backgroundColor = 'white'
    age2.style.borderRadius = '8px'
    text2.style.color = '#4B5563'

    age3.style.backgroundColor = 'white'
    age3.style.borderRadius = '8px'
    text3.style.color = '#4B5563'

    age4.style.backgroundColor = 'white'
    age4.style.borderRadius = '8px'
    text4.style.color = '#4B5563'

    age.style.backgroundColor = 'white'
    age.style.borderRadius = '8px'
    text.style.color = '#4B5563'
})

// mobile menu
let ages = document.querySelector('#items')
let ages2 = document.querySelector('#items2')
let ages3 = document.querySelector('#items3')
let ages4 = document.querySelector('#items4')
let ages5 = document.querySelector('#items5')
let texts = document.querySelector('#texts')
let texts2 = document.querySelector('#texts2')
let texts3 = document.querySelector('#texts3')
let texts4 = document.querySelector('#texts4')
let texts5 = document.querySelector('#texts5')





ages.addEventListener('click', function() {
    ages.style.backgroundColor = '#F0F4F6'
    ages.style.borderRadius = '8px'
    texts.style.color = 'black'

    ages2.style.backgroundColor = 'white'
    ages2.style.borderRadius = '8px'
    texts2.style.color = '#4B5563'

    ages3.style.backgroundColor = 'white'
    ages3.style.borderRadius = '8px'
    texts3.style.color = '#4B5563'

    ages4.style.backgroundColor = 'white'
    ages4.style.borderRadius = '8px'
    texts4.style.color = '#4B5563'

    ages5.style.backgroundColor = 'white'
    ages5.style.borderRadius = '8px'
    texts5.style.color = '#4B5563'
    
})
ages2.addEventListener('click', function() {
    ages2.style.backgroundColor = '#F0F4F6'
    ages2.style.borderRadius = '8px'
    texts2.style.color = 'black'
    
    ages.style.backgroundColor = 'white'
    ages.style.borderRadius = '8px'
    texts.style.color = '#4B5563'

    ages3.style.backgroundColor = 'white'
    ages3.style.borderRadius = '8px'
    texts3.style.color = '#4B5563'

    ages4.style.backgroundColor = 'white'
    ages4.style.borderRadius = '8px'
    texts4.style.color = '#4B5563'

    ages5.style.backgroundColor = 'white'
    ages5.style.borderRadius = '8px'
    texts5.style.color = '#4B5563'
})
ages3.addEventListener('click', function() {
    ages3.style.backgroundColor = '#F0F4F6'
    ages3.style.borderRadius = '8px'
    texts3.style.color = 'black'

    
    ages2.style.backgroundColor = 'white'
    ages2.style.borderRadius = '8px'
    texts2.style.color = '#4B5563'

    ages.style.backgroundColor = 'white'
    ages.style.borderRadius = '8px'
    texts.style.color = '#4B5563'

    ages4.style.backgroundColor = 'white'
    ages4.style.borderRadius = '8px'
    texts4.style.color = '#4B5563'

    ages5.style.backgroundColor = 'white'
    ages5.style.borderRadius = '8px'
    texts5.style.color = '#4B5563'
})
ages4.addEventListener('click', function() {
    ages4.style.backgroundColor = '#F0F4F6'
    ages4.style.borderRadius = '8px'
    texts4.style.color = 'black'
    
    ages2.style.backgroundColor = 'white'
    ages2.style.borderRadius = '8px'
    texts2.style.color = '#4B5563'

    ages3.style.backgroundColor = 'white'
    ages3.style.borderRadius = '8px'
    texts3.style.color = '#4B5563'

    ages.style.backgroundColor = 'white'
    ages.style.borderRadius = '8px'
    texts.style.color = '#4B5563'

    ages5.style.backgroundColor = 'white'
    ages5.style.borderRadius = '8px'
    texts5.style.color = '#4B5563'
})
ages5.addEventListener('click', function() {
    ages5.style.backgroundColor = '#F0F4F6'
    ages5.style.borderRadius = '8px'
    texts5.style.color = 'black'
    
    ages2.style.backgroundColor = 'white'
    ages2.style.borderRadius = '8px'
    texts2.style.color = '#4B5563'

    ages3.style.backgroundColor = 'white'
    ages3.style.borderRadius = '8px'
    texts3.style.color = '#4B5563'

    ages4.style.backgroundColor = 'white'
    ages4.style.borderRadius = '8px'
    texts4.style.color = '#4B5563'

    ages.style.backgroundColor = 'white'
    ages.style.borderRadius = '8px'
    texts.style.color = '#4B5563'
})