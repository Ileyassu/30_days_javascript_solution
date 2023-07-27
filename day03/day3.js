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