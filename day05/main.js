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

//Exercise: Level 3
//1
const ages = [19, 22, 19, 23, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

//2

if(ages.length % 2 != 0){
    let median = parseInt((ages.length / 2))
    console.log(ages[median])
}else{
    let median1 = parseInt((ages.length / 2))
    console.log(ages[median1], ages[median1 - 1])
}

//console.log(parseInt((ages.length / 2) + 1))
//console.log(ages[6])


