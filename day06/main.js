//Exercises: Level 1

const countries = require('./data/countries')
const webTechs = require('./data/webTechs')

//1

for(let i = 0; i<10; i++){
    console.log(i)
}
let y = 0;
do {
    console.log(y)
    y++;
} while (y<10);

let i = 0;

while(i<10){
    console.log(i)
    i++;
}

//2
for(let i = 10; i>0; --i){
    console.log(i)
}


do{
    console.log(i)
    --i;
}while(i>0)
y = 10
while(y<0){
    console.log(y)
    --y;
}

//3

for(let n = 0; n < 5; n++){
    n++
}

//4
let hashString = '#';
let emtyString = '';
let x = 0;
while(x < 5){
    emtyString = emtyString + hashString;
    x++;
    console.log(emtyString)
}

//5

x = 0
let multiplication
while(x<10){
    x++
    multiplication = x*x
    console.log(`${x} * ${x} = ${multiplication}`)
}

//6

i = 0
x = 0
y = 0
console.log(`${i}  ${x}    ${y}`)
    i ++
    x = i*i
    y = i * x
let n = 0
console.log('i  i^2 i^3')

    while(i<11){
        ++i
        console.log(`${i}  ${x}    ${y}`)
        x = i*i
        y = i * x
    }

//7

for(let i = 0; i<100;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

//8
for(let i = 0; i<100;i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

//9
n = 0
for(let i = 2; i<=100; i++){
    let isPrime = true;
    for(let j = 2;j<Math.sqrt(i); j++){
        if(i%j === 0){
            isPrime = false;
            break;
        };
    }

    if(isPrime){
        console.log(i)
    }
}

//10
n = 0
for(let i = 0; i <= 100; i++){
    n += i;
    console.log(n)
}
console.log('The sum of all numbers from 0 to 100 is ' + n)

//11
let odds = 0
let evens = 0
for(let i = 0; i <= 100; i++){
    if(i%2 == 0){
        evens = i + evens
    } else{
        odds += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odds}.`)

//12

odds = 0
evens = 0
let arrEO= []

for(let i = 0; i<=100; i++){
    if(i%2==0){
        evens+=i
    }else{
        odds+=i
    }
    if(i == 100){
        arrEO.push(evens, odds)
    }
}
console.log(arrEO)

//13
let randomNum= []
for(let i = 0; i<5; i++){
    randomNum.push(parseInt(Math.random() * 100)) 
    i == 4 ? console.log(randomNum) :null;
}

//14 
n = 0
randomNum = []
for(let i = 0; i < 5; i++){
    n = parseInt(Math.random() * i)
    if(randomNum.includes(n)){
        --i;
    }else{
        randomNum.push(n)
    }
}
console.log(randomNum)

//15
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é"0^@';

let arrayChar = []
let charS
x = 0

for(let i = 0; i <= 5 ; i++){
    n = parseInt(Math.random() * 34 - 1)
    charS = characters[n]
    arrayChar.push(charS)
}

console.log(arrayChar.join(''))

//Exercises: Level 2

//1
let arrayChar1 = []
let NewcharS = 0
x = 0
let randomizer = parseInt(Math.random() * 55)
for(let i = 0; i <= randomizer ; i++){
    n = parseInt(Math.random() * 34 - 1)
    NewcharS = characters[n]
    arrayChar1.push(NewcharS)
}
console.log(arrayChar1.join(''))
arrayChar1.length

//2

let hexaNumbers = '#'
for(let i = 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * 16)
    const hexMaker = randomNumber.toString(16)
    hexaNumbers+=hexMaker
}
console.log(hexaNumbers)
//3
let color1;
let color2;
let color3;
for(let i = 0; i <= 1; i++){
    color1 = Math.floor(Math.random() * 256)
    color2 = Math.floor(Math.random() * 256)
    color3 = Math.floor(Math.random() * 256)
}
console.log(`rgb(${color1}, ${color2}, ${color3})`)

//4

for(let i = 0; i<countries.length; i++){
    console.log(countries[i].toUpperCase())
}

//5
let countriesLength = []
for(let i = 0; i<countries.length; i++){
    countriesLength.push(countries[i].length);
}

//6 
let item1, item2, item3 = []
let newArray = []
for(let i = 0; i<countries.length; i++){
    item1.push(countries[i])
    item2.push(countries[i].slice(0, 3))
    item3.push(countries[i].length)
    newArray.push([item1, item2, item3])
}