const parseInt = require("parse-int")();
const prompt = require("prompt-sync")();

do{
    var i = 1 ;
    var num = parseInt(prompt("Enter a number : "))
    if(num === 4){
      document.body.style.background="green"
      break
    }
    else{
      console.error(`num = ${num} but it should be 4`)
         console.warn(`You have ${10-i} chances left to guess the right number`)
         i++
    }
  }while(num != 4 || i >= 10)
    alert("The background is now green");
  confirm("Exit the loop");
  