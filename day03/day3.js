//Exercises: Level 1
//---------------------------


/*1 --- Declare firstName, lastName, country, city, age, 
isMarried, year variable and assign value to it and
usethe typeof operator to check different data types.*/

let firsName = 'ilyas', 
    lastName = 'Benaissa', 
    country = 'Morocco', 
    city = 'Sala aljadida', 
    age = 23, 
    isMarried = false, 
    year = new Date().getFullYear();

console.log(typeof(firsName,lastName,country, city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))


//*2 --- Check if type of '10' is equal to 10
console.log(10 == '10')

//*3 --- Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
/**4 ---Boolean value is either true or false.
 *  i - Write three JavaScript statement which provide truthy value.
 */

console.log(0 == false)
console.log(1 == true)
console.log('' == false)

// *  ii- Write three JavaScript statement which provide falsy value.

console.log(0n != false)
console.log(4 < '1')
console.log(3 === '3')

/*5 --Figure out the result of the following comparison expression 
first without using console.log().
After you decide the result confirm it using console.log()

4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4false
4 !== 4 false
4 != '4' true
4 == '4' true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log( ['python'].length == ['Jargon'].length);

/*7 -- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python
*/
let python = 'python';
let jargon = 'python';
console.log( python.includes('on') && jargon.includes('on'));

//*7 -- Use the Date object to do the following activities

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+ 1)
console.log(now)
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//Exercises: Level 2

// Write a script that prompt the user to enter base and height of the
//triangle and calculate an area of a triangle 
//(area = 0.5 x b x h).

let base = prompt('Write the Base','20'), 
height = prompt('Write Height','10'), area = 0.5 * base * height
console.log(area)

/**Write a script that prompt the user to enter side a, 
 * side b, and side c of the triangle and and calculate 
 * the perimeter of triangle (perimeter = a + b + c) */

let a = parseInt(prompt('Enter a side'));
let b = parseInt(prompt('Enter a side'));
let c = parseInt(prompt('Enter a side'));

let perimeteur = a + b + c;

console.log(perimeteur.typeof)
