const obj = {
    nilambar : '20',
    yaiphaba : "15",
    ryan : "19",
    dayananda : "15"
}

let keys = Object.keys(obj);

for(let i = 0 ; i < keys.length ; i++){
    console.log(obj[keys[i]]);
}
// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`);
// }