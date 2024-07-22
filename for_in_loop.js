const myObjects = {
    name: "Nilambar",
    age: 20
}
for( let key in myObjects){
    console.log(`${key} : ${myObjects[key]}`);
}
let i = 1;
const myArray = ["New","Old","Almost",10,30,50];
for(let index in myArray){
    console.log(`S1.No. ${i} ---- ${myArray[index]}`);
    i++;
}

