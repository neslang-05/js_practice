let number = [];
const noElements = parseInt(prompt("Enter number of elements: "));
for(let i = 0 ; i<noElements ; i++){
    number[i] = parseInt(prompt(`Enter number ${i+1} : `));
}

let numArrayLength = number.length;
let sum = 0;
for(i = 0 ; i<numArrayLength ; i++){
    sum += number[i];
}   

let mean = sum / numArrayLength;
alert(`Mean of ${number} is ${mean}`);