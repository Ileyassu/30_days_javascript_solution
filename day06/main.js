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
for(let i = 0; i <= 5 ; i++){
    n = parseInt(Math.random() * 68 - 1)
    charS = characters[n]
    arrayChar.push(charS)
}

console.log(arrayChar.join(''))