let str = "Nice";
console.log(str);
let char = "R";
let newstr = str.split('');
console.log(newstr);
newstr[0] = char;
str = newstr.join('');
console.log(str);
