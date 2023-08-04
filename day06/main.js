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