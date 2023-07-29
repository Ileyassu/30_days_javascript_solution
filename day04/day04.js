//Exercises: Level 1
//1

let Userage = parseInt(prompt('Enter your age', '23'));
let yearsLeftToDrive = 18 - Userage;
Userage >= 18
    ? console.log('You are old enough to drive.')
    : console.log(`You are left with ${yearsLeftToDrive} years to drive.`)

//2
let ageComp;
let myAge = parseInt(prompt('Enter your age', '23'))
let yourAge = parseInt(prompt('Enter your age', '23'))
if(yourAge <= myAge){
    ageComp =  myAge - yourAge;
    console.log(`You are ${ageComp} older than me`)
} else{
    ageComp = yourAge - myAge;
    console.log(`I am ${ageComp} older than you`)
}

//3
let a = 4;
let b = 3;

if(a > b ){
    console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}

a > b 
    ? console.log('a is greater than b') 
    : console.log('b is greater than a')

//4
//we check if a number is Even using modulus operator and 2
//example : 

let enterNum = parseInt(prompt('Enter a number'))
console.log(enterNum)
enterNum % 2 == 0
    ? console.log('um is even')
    : console.log('num is not even')

//Exercises: Level 2

//1

let grades = parseInt(prompt('Write your grade', 100))

if (grades >= 80 && grades <= 100) {
    console.log("A");
} else if(grades >= 70  && grades <= 89){
    console.log("B");
} else if(grades >= 60  && grades <= 69){
    console.log("C");
}else if(grades >= 50  && grades <= 59){
    console.log("D");
}else if(grades >= 0  && grades <= 49){
    console.log("F");
}

//2 

let season = prompt("Season checker, Write the month", "June");

switch(season){
    case "September":
    case "October":
    case "November":
        console.log('the season is Autumn');
        break
    case "December":
    case "January":
    case "February":
        console.log('the season is Winter');
        break
    case "March":
    case "April":
    case "May":
        console.log('the season is Spring');
        break
    case "June":
    case "July":
    case "August":
        console.log('the season is Summer');
        break

    default:
        console.log("waaaaa HHHHHHHHHHHHHHH")
}

//3

let day = prompt("Weekday checker", "Monday")

if(day == "Saturday" || day == "Sunday"){
    console.log("It's weekend")
} else{
    console.log("It's workday")
}