const num = 76;
while(true){
    let guess = parseInt(prompt("Guess a number : "));
    if(guess === num){
        prompt("You have guessed it right");
        break;
    }else{
        alert("You have guessed it wrong \n Please Try again ");
    }
}
