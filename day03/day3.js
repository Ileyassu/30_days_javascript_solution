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
//Get length and width using prompt and calculate an area 
//of rectangle (area = length x width and the perimeter of 
//rectangle (perimeter = 2 x (length + width))

let recLength = parseInt(prompt('Input lenghth', '4'))
let recWidth = parseInt(prompt('Input Width', '6'))
perimeteur = (2 * (recLength + recWidth))

console.log(perimeteur)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = parseInt(prompt('Input radius'))
let areaa = Math.PI * radius * radius;
console.log(areaa)

let circumference = 2 * Math.PI * radius

console.log(circumference)


//Calculate the slope, x-intercept and y-intercept of y = 2x -2

let X2, Y1, m, X1, Y2;
m = 2;
//The y-intercept occurs when x = 0. To find the y-intercept, plug x = 0 into the equation y = 2x - 2:

X2 = 0

Y2 = m * (X2) - 2
console.log(` y intercept is 0, ${Y2}`)
//So, the y-intercept is -2, which means the line crosses the y-axis at the point (0, -2).

//The x-intercept occurs when y = 0. To find the x-intercept, set y = 0 in the equation y = 2x - 2 and solve for x:

Y1 = 0

//y= m(x) -2
//0 = 2x - 2
//2x = 2
//x = 2/2
X1 = 1
console.log(`x intercept is ${X1}, 0`)

m = 2

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, 
x2 = 6, 
y1 = 2, 
y2 =10
let slope = (y1 - y2) / (x1 - x2)
console.log(slope)

//let's compare first and second slope

console.log(m == slope)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

x = 2**2 + 6*2 + 9
y = 0
console.log(`y is ${y}, ${x}`)

x = 3**3 + 6*3 + 9
y = 0
console.log(`y is ${y}, ${x}`)

x = 4**4 + 6*4 + 9
y = 0
console.log(`y is ${y}, ${x}`)

x = 0**0 + 6*0 + 9
y = 0
console.log(`y is ${y}, ${x}`)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let h = parseInt(prompt('Enter hours'))
let rph = parseInt(prompt('Enter rate per hours'))
let wE = (h * rph) * 7;

console.log(wE)