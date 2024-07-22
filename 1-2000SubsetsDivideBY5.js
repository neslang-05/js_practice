
const arrayOneTo2000 = [];
for (let i = 0; i <= 200; i++) {
    arrayOneTo2000.push(i);
}
console.log("Array from 1 to 2000:", arrayOneTo2000);


let divisibleBy5 = arrayOneTo2000.filter((x) => {
    return x % 5 == 0
})


console.log("Numbers divisible by 5:", divisibleBy5);                                                                 
console.log("Total count of numbers divisible by 5:", divisibleBy5.length);
