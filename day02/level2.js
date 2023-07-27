/*console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log(typeof('10') == 10)
if(typeof('10') == 10){
    console.log(`Type of '10' equals to 10`);
}else{
   console.log(parseInt('10') === 10)
}

console.log(parseFloat('9.8') + 0.2 == 10)

console.log('I hope this course is not full of jargon'.includes('jargon'))
console.log(['python', 'jargon'].every(item => item.includes('on')))
console.log(Math.floor(Math.random()* 101))
console.log(Math.floor(Math.random()* 256))
console.log(Math.floor(Math.random()*51)+50)

console.log(Math.floor(Math.random()*'javascript'.length))
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`)

let sentence = `You cannot end a sentence with because because because is a conjunction`;
console.log(sentence.substr(sentence.indexOf('because'), 23))
console.log(sentence.indexOf('because'))
console.log(sentence[23, 30])
let lovee = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(lovee.match(/love/gi).length)
*/

const oldSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let newSentence = oldSentence.replace(/[@%#&$]/g, '')
console.log(newSentence)
