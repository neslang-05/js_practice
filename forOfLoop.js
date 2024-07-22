const myArrays = ["Apple","Banana","Orange","Pineapple"];
let i = 1;
for(let fruits of myArrays){
    console.log(`Fruit No. ${i} :: ${fruits}`);
    i++;
}

const strings = "Nilambar";
let count = 0;
for(let char of strings){
    count++;
}
console.log(`The number of characters in ${strings} is : ${count}`);