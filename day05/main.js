//1
const countries = require('./data/countries')
const webTechs = require('./data/webTechs')

//2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(/[., ]+/)
words.pop()
console.log(words)
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")

//*
shoppingCart.push('Sugar')

//*
const removeHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(removeHoney, 1)

//*
const modifyTea = shoppingCart.indexOf('Tea') 
shoppingCart[modifyTea] = 'Green Tea'
console.log(shoppingCart)

//4
if(countries.indexOf('ETHIOPIA') != true){
    countries.push('ETHIOPIA')
}
console.log(`the ETHIOPIA country exist on index : ${countries.indexOf('ETHIOPIA')}`)
const Ethiopia = countries.indexOf('ETHIOPIA')

//5

if(webTechs.indexOf('Sass') != true){
    webTechs.push('Sass')
}
const Sass = webTechs.indexOf('Sass')
console.log(`${webTechs[Sass]} is a CSS preprocess`)

//6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)