let arr = [1,2,5,6,8];
// for( let i = 0 ; i < arr.length ; i++){
//     arr[i] **= 2;
// }
// console.log(arr);
const square = arr.map((x)=>{
    return x **=2
})

console.log(square)