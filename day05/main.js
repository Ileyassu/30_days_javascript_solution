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
//*
const ages = [19, 22, 19, 23, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
const max = ages.sort().pop()
const min = ages.sort().shift()
console.log('Max :' + max)
console.log('Min :' + min)
//*

if(ages.length % 2 != 0){
    let median = parseInt((ages.length / 2))
    console.log('Median is ' + ages[median])
}else{
    let median1 = parseInt((ages.length / 2))
    console.log('Median is ' + ages[median1], ages[median1 - 1])
}
//*
let x = 0;
for(let i = 0; i<ages.length; i++){
    x = x + ages[i]
}
let average = parseInt(x/ages.length)
console.log(average)

//*
const range = (max - min)
console.log(range)

//*
let value1 = Math.abs(min - average)
let value2 = Math.abs(max - average)
if(value1>value2){
    console.log('value1 is bigger')
} else {
    console.log('value2 is bigger')
}

//1
console.log(countries.slice(0, 10));

//2
let middle = countries.length / 2;
console.log(countries[97])

//
let cArr1;
let cArr2;
if((middle / 2) % 0){
    cArr1 = countries.slice(0, middle)
    cArr2 = countries.slice(middle, countries.length)
}else{
    
    cArr1 = countries.slice(0, middle)
    cArr2 = countries.slice(middle, countries.length)
}

console.log(cArr1.length) //97
console.log(cArr2.length) //97

console.log(countries.length) //194