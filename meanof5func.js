const meanofNumbers = (...numbers) => {
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        sum += numbers[i];
    }
    let mean = sum / numbers.length;
    return mean;
}

let mean = meanofNumbers(5, 6, 7, 8, 9);
console.log(mean);