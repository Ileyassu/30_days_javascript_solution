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


if(itCompanies.includes("Amazon") == true){
    console.log('it exsits')
}else{
    console.log('company is not found')
}
