//Exercise: Level 1
//1

const arr = [];
//2
const arr1 = Array(5).fill('X')
//3
console.log(arr1.length)
//4
console.log(arr1[0])
console.log(arr1[2])
console.log(arr1[4])
//5
const mixedDataTypes = [{name : "ilyas",age : 23},"NodeJs", true, 20, 19.99, false]
console.log(mixedDataTypes.length)
//6
const Companies = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
//Too lazy to write them down, i just copy pasted them and removed one elements lol
const itCompanies = Companies.split(',')
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
//10

for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}
//11
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}
//12

console.log(itCompanies.toString(),itCompanies.slice(5, 7).join(' and'), " are big IT companies.")

//13
if(itCompanies.includes("Amazon") == true){
    console.log('it exsits')
}else{
    console.log('company is not found')
}

//14

for(let i = 0; i < itCompanies.length; i++){
    console.log(`${itCompanies[i]} : ${itCompanies[i].split('o').length -1}`)
}

//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse())
//17
console.log(itCompanies.slice(0, 3))
//18
console.log(itCompanies.slice(3, 6))
//19
console.log(itCompanies.slice(3, 4))
//20
itCompanies.shift()
console.log(itCompanies)
itCompanies.unshift()
console.log(itCompanies)
//21
console.log(itCompanies.splice(2,2))
//22
console.log('-------')
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
//23
console.log('-------')
for(i = 0; i < itCompanies.length; i++){
    itCompanies.pop()
    if(itCompanies.length == 1){
        itCompanies.shift()
    }
}
//or basically 
itCompanies = []
//lol
console.log(itCompanies)