// const prompt = require('prompt-sync')();
// let arr = [1,2,5,6,8];
// let number;  
// do{
//     number = prompt("Enter the elements of the array : ")
//     number = Number.parseInt(number);
//     arr.push(number);
// }while(number != 0)
// console.log(arr);



let arr = [1,20,50,6,8, 500]; 

const divisible = arr.filter((x)=>{
    return x%10 === 0
})

console.log(divisible);

